const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  const { productId, quantity } = req.body;
  const product = data.products.find(p => p.id === productId);

  if (!product) return res.status(404).json({ message: "Product not found" });
  if (product.stock === 0 || quantity > product.stock)
    return res.status(400).json({ message: "Insufficient stock" });

  const totalAmount = product.price * quantity;
  const newOrder = {
    id: Date.now(),
    productId,
    quantity,
    totalAmount,
    status: "placed",
    createdAt: new Date().toISOString().split("T")[0]
  };

  product.stock -= quantity;
  data.orders.push(newOrder);
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
  res.status(201).json({ message: "Order placed", order: newOrder });
});

router.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  res.json(data.orders);
});

router.delete("/:orderId", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  const order = data.orders.find(o => o.id == req.params.orderId);
  if (!order) return res.status(404).json({ message: "Order not found" });
  if (order.status === "cancelled")
    return res.status(400).json({ message: "Already cancelled" });

  const today = new Date().toISOString().split("T")[0];
  if (order.createdAt !== today)
    return res.status(400).json({ message: "Cancellation not allowed" });

  order.status = "cancelled";
  const product = data.products.find(p => p.id === order.productId);
  product.stock += order.quantity;

  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
  res.json({ message: "Order cancelled" });
});

router.patch("/change-status/:orderId", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  const order = data.orders.find(o => o.id == req.params.orderId);
  const { status } = req.body;

  if (!order) return res.status(404).json({ message: "Order not found" });
  if (order.status === "cancelled" || order.status === "delivered")
    return res.status(400).json({ message: "Status change not allowed" });

  const flow = { placed: "shipped", shipped: "delivered" };
  if (flow[order.status] !== status)
    return res.status(400).json({ message: "Invalid flow" });

  order.status = status;
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
  res.json({ message: "Status updated", order });
});

module.exports = router;
