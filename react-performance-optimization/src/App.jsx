
import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const productsData = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 },
];

function App() {
  const [counter, setCounter] = useState(0);
  const [products] = useState(productsData);

  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  const handleProductSelect = useCallback((product) => {
    console.log("Selected product:", product.name);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Performance Optimization</h2>
      <h3>Total Price: ₹{totalPrice}</h3>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <hr />

      <ProductList products={products} onSelect={handleProductSelect} />
    </div>
  );
}

export default App;
