# Schema Design Fundamentals – Relational Databases

## 1. What is Schema Design and What Does a Database Schema Represent?

Schema design is the process of planning and organizing how data is stored in a relational database. It defines the structure of the database before actual data is inserted.

A database schema represents the blueprint of the database. It describes:
- Tables
- Columns (fields)
- Data types
- Relationships between tables
- Constraints and rules

Just like a building blueprint guides construction, a schema guides how data is stored, accessed, and maintained.

---

## 2. Why Schema Design Is Required Before Writing Backend Code

Schema design should be done before backend development because backend code depends heavily on the database structure.

Reasons:
- Backend APIs read and write data based on table structure
- Poor schema changes later require rewriting backend logic
- Well-designed schema reduces bugs and improves performance

Designing schema first ensures that backend code is clean, stable, and easy to extend.

---

## 3. Impact of Poor Schema Design

Poor schema design can cause several problems:

### a) Data Consistency Issues
- Duplicate data stored in multiple places
- Conflicting values for the same information

### b) Maintenance Problems
- Difficult to update or modify tables
- Small changes affect many parts of the system

### c) Scalability Issues
- Database becomes slow as data grows
- Hard to add new features or tables

A bad schema increases technical debt and reduces system reliability.

---

## 4. Validations in Schema Design and Why Databases Enforce Them

Validations (constraints) are rules applied to database columns to ensure correct and meaningful data.

Common validations include:
- NOT NULL – Ensures a column cannot have empty values
- UNIQUE – Prevents duplicate values
- PRIMARY KEY – Uniquely identifies each row in a table
- DEFAULT – Assigns a default value if none is provided

Databases enforce validations to:
- Maintain data accuracy
- Prevent invalid data entry
- Reduce errors at the application level

---

## 5. Difference Between Database Schema and Database Table

Database Schema:
- Overall structure of the database
- Contains multiple tables
- Logical design

Database Table:
- Single data structure inside schema
- Stores actual records
- Physical data storage

A schema is a collection of tables and rules, while a table holds the data itself.

---

## 6. Why a Table Should Represent Only One Entity

An entity represents a real-world object such as User, Product, or Order.

Each table should represent only one entity to:
- Avoid confusion
- Reduce data duplication
- Make queries simple and meaningful

Example:
- User table → user details
- Order table → order details

---

## 7. Why Redundant or Derived Data Should Be Avoided

Redundant data is repeated information stored in multiple places.
Derived data is data that can be calculated from existing data.

Problems with redundant or derived data:
- Data inconsistency
- Extra storage usage
- Update anomalies

Example:
- Storing total price when it can be calculated from quantity and unit price

---

## 8. Importance of Choosing Correct Data Types

Choosing the correct data type is crucial for:
- Efficient storage
- Faster queries
- Accurate data validation

Examples:
- INT for numeric values
- DATE for dates
- BOOLEAN for true/false values

Wrong data types can cause performance issues and data errors.

---

## Conclusion

Schema design is a foundational step in relational database development. A well-designed schema ensures data consistency, simplifies backend development, improves performance, and allows the system to scale efficiently.
