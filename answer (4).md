# Database Relationships

## 1. Definition of Database Relationship

A **database relationship** defines how two or more tables in a database are connected to each other using keys (primary key and foreign key).  
Relationships help maintain **data consistency**, **avoid duplication**, and **represent real-world connections** between data.

In simple words, a database relationship shows **how data in one table is related to data in another table**.

---

## 2. Types of Database Relationships

There are three main types of database relationships:

1. One-to-One (1:1)  
2. One-to-Many (1:N)  
3. Many-to-Many (M:N)  

Each type is explained below with **e-commerce examples**.

---

## 3. One-to-One Relationship (1:1)

### Definition  
In a **One-to-One** relationship, one record in Table A is linked to **only one record** in Table B, and vice versa.

### E-commerce Example  
**User ↔ User Profile**

- Each user has only one profile.
- Each profile belongs to only one user.

### Tables Example  
- `users(user_id, email, password)`  
- `user_profiles(profile_id, user_id, address, phone)`  

Here, `user_id` in `user_profiles` is a **foreign key** referencing `users.user_id`.

### Diagram  
```
Users ────── User_Profile
 1              1
```

---

## 4. One-to-Many Relationship (1:N)

### Definition  
In a **One-to-Many** relationship, one record in Table A can be related to **multiple records** in Table B, but each record in Table B relates to only one record in Table A.

### E-commerce Example  
**Customer ↔ Orders**

- One customer can place many orders.
- Each order belongs to only one customer.

### Tables Example  
- `customers(customer_id, name, email)`  
- `orders(order_id, customer_id, order_date)`  

Here, `customer_id` in `orders` is a **foreign key**.

### Diagram  
```
Customers ────── Orders
   1               N
```

---

## 5. Many-to-Many Relationship (M:N)

### Definition  
In a **Many-to-Many** relationship, multiple records in Table A can be related to multiple records in Table B.

This type of relationship is implemented using a **junction (bridge) table**.

### E-commerce Example  
**Products ↔ Orders**

- One order can contain many products.
- One product can appear in many orders.

### Tables Example  
- `products(product_id, name, price)`  
- `orders(order_id, order_date)`  
- `order_items(order_id, product_id, quantity)`  

`order_items` acts as a **junction table** containing foreign keys from both tables.

### Diagram  
```
Orders ──── Order_Items ──── Products
   N              M               N
```

---

## 6. Importance of Database Relationships in E-commerce

- Ensures **data integrity**
- Reduces **data redundancy**
- Makes the database **scalable**
- Helps in **efficient querying**
- Reflects real-world business rules accurately

---

## 7. Conclusion

Database relationships are essential for designing efficient and reliable databases.  
In e-commerce applications, relationships help manage users, orders, products, and payments in a structured way, ensuring smooth operations and accurate data handling.
