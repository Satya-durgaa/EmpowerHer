# Database Fundamentals – Conceptual Understanding

## 1. Why is db.json not suitable as a database for real projects?

`db.json` is a file-based storage system and is not suitable for real-world applications because of the following limitations:

### Performance
- Every read or write operation requires reading the entire file into memory.
- As data grows, operations become slower and inefficient.

### Scalability
- It cannot handle large amounts of data efficiently.
- Not suitable for applications with many users or high traffic.

### Concurrency
- Multiple users accessing or writing to the file at the same time can cause data corruption.
- No proper locking or transaction mechanism.

### Reliability
- If the application crashes while writing, data may be lost or corrupted.
- No automatic backup or recovery system.

Because of these issues, `db.json` is only suitable for learning, testing, or very small projects.

---

## 2. Ideal characteristics of a database system (apart from storage)

A good database system provides much more than just data storage:

### Performance
- Fast data retrieval and updates using indexing and optimized queries.

### Concurrency
- Supports multiple users accessing and modifying data at the same time safely.

### Reliability
- Ensures data is not lost due to crashes or failures.
- Provides backup and recovery mechanisms.

### Data Integrity
- Maintains accuracy and consistency of data.
- Uses constraints like primary keys, foreign keys, and validations.

### Scalability
- Can handle increasing amounts of data and users without performance issues.

### Fault Tolerance
- Continues to work even if part of the system fails.
- Replication and failover mechanisms ensure availability.

---

## 3. Types of databases and their use cases

### 1. Relational Databases (SQL)
These databases store data in tables with rows and columns and use structured schemas.

**Examples:**
- MySQL
- PostgreSQL
- Oracle

**Use Cases:**
- Banking systems
- E-commerce applications
- School and college management systems

They are best when data has clear relationships and requires strong consistency.

---

### 2. Non-Relational Databases (NoSQL)
These databases store data in flexible formats like documents, key-value pairs, or graphs.

**Examples:**
- MongoDB (Document-based)
- Redis (Key-value)
- Cassandra (Column-based)

**Use Cases:**
- Social media platforms
- Real-time chat applications
- Big data and analytics systems

They are best for applications that require high scalability and flexible data structures.
