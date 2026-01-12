# Web Application Fundamentals

## Q1. Role of Frontend (FE)

The Frontend (FE) is the part of a web application that users directly see and interact with. It focuses on visual presentation, usability, and user experience.

### User Interface
- Displays visual elements such as buttons, forms, images, menus, and layouts.
- Ensures the application is visually appealing and easy to navigate.
- Built using technologies like HTML, CSS, and JavaScript.

### User Interaction
- Handles user actions like clicking buttons, filling forms, scrolling pages, and submitting data.
- Performs basic input validation before sending data to the backend.
- Provides instant feedback such as alerts, error messages, and loading indicators.

### Communication with Backend
- Sends requests to the backend through APIs using HTTP or HTTPS.
- Receives responses (mostly in JSON format) and updates the UI accordingly.
- Enables dynamic content updates without reloading the page.

---

## Q2. Role of Backend (BE)

The Backend (BE) is responsible for handling the internal operations of a web application. It processes requests, manages data, and ensures security.

### Server-Side Processing
- Receives requests from the frontend.
- Executes application logic and business rules.
- Generates appropriate responses for the client.

### Database Handling
- Stores and manages data such as user information, orders, and transactions.
- Performs operations like create, read, update, and delete (CRUD).
- Ensures data consistency and reliability.

### Security and Authentication
- Manages user authentication and authorization.
- Protects sensitive data using encryption.
- Prevents unauthorized access and cyber attacks.

---

## Q3. Business Logic

Business Logic refers to the set of rules and conditions that define how a web application behaves according to business requirements. It controls how data is processed and ensures the system works correctly.

### Real-World Examples

1. E-commerce Application  
   - Applying discounts only when the cart value exceeds a minimum amount.  
   - Calculating the final price including tax and delivery charges.

2. Banking Application  
   - Allowing money transfer only if the account balance is sufficient.  
   - Limiting the number of transactions per day.

3. Online Examination System  
   - Automatically submitting the exam when the time limit is reached.  
   - Restricting students to a single attempt if reattempts are not allowed.

---

## Q4. Client–Server Model

The Client–Server Model is a computing architecture where tasks are divided between clients and servers.

### Client
- The client is the device or application used by the user.
- It sends requests and displays responses.
- Example: Web browsers or mobile apps.

### Server
- The server processes client requests.
- It applies logic, interacts with the database, and returns results.
- Example: Application servers or web servers.

### Communication Between Client and Server
1. The client sends an HTTP request.
2. The server processes the request.
3. The server sends an HTTP response.
4. The client displays the received data.

---

## Q5. Three-Tier Architecture

Three-Tier Architecture divides a web application into three separate layers to improve scalability and maintainability.

### Presentation Layer
- User interface of the application.
- Handles display and user interaction.
- Built using frontend technologies.

### Application (Business) Layer
- Contains business logic and processing rules.
- Acts as a bridge between presentation and data layers.
- Handles validations and workflows.

### Data Layer
- Manages the database.
- Stores and retrieves application data.
- Ensures data security and integrity.

### Why This Architecture Is Used
- Improves application organization.
- Makes maintenance and updates easier.
- Enhances security by separating responsibilities.

---

## Q6. JavaScript as a Backend Language

JavaScript is widely used as a backend language because of its efficiency and strong ecosystem.

### Performance
- Uses an event-driven, non-blocking model.
- Handles multiple requests efficiently.
- Suitable for real-time applications.

### Ecosystem
- Large collection of libraries and tools.
- Easy integration with frontend JavaScript.
- Strong community support.

### Popular Backend Frameworks
- Helps in building scalable and fast server-side applications.
- Supports API development, authentication, and database connectivity.
- Widely adopted in modern web development.
