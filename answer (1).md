
# Node.js Internals – Theory

## Node.js Architecture
- Node.js uses a single-threaded, event-driven architecture.
- It handles multiple client requests using non-blocking I/O.
- Heavy tasks are delegated to background systems so the main thread stays free.

## JavaScript Engine (V8)
- V8 is the JavaScript engine developed by Google.
- It converts JavaScript code into machine-level instructions.
- Node.js uses V8 to execute JavaScript outside the browser.

## Node.js Core APIs
- Core APIs are built-in modules provided by Node.js.
- They allow JavaScript to interact with the operating system.
- Examples include fs, http, os, path, and dns modules.

## Native Bindings
- Native bindings connect JavaScript with C/C++ code.
- They help access low-level system functionalities.
- Core APIs internally use native bindings.

## Event Loop
- The event loop manages asynchronous operations.
- It continuously checks queues and executes callbacks.
- It enables non-blocking behavior in Node.js.

## libuv

### What is libuv?
- libuv is a C library used by Node.js.
- It provides asynchronous I/O support.

### Why Node.js needs libuv
- JavaScript is single-threaded.
- libuv handles background tasks and OS-level operations.

### Responsibilities of libuv
- Managing the event loop
- Handling asynchronous I/O
- Managing the thread pool
- Handling timers and callbacks

## Thread Pool

### What is a thread pool?
- A thread pool is a set of worker threads.
- It performs blocking or time-consuming operations.

### Why Node.js uses a thread pool
- To avoid blocking the main event loop.
- To efficiently handle heavy background tasks.

### Operations handled by the thread pool
- File system operations
- DNS lookups
- Cryptography
- Compression

## Worker Threads

### What are worker threads?
- Worker threads are separate threads that run JavaScript code.
- They are used for CPU-intensive tasks.

### Why are worker threads needed?
- To prevent blocking the event loop during heavy computation.
- To enable parallel execution.

### Difference between thread pool and worker threads
- Thread pool is managed internally by Node.js.
- Worker threads are controlled by the developer.
- Thread pool handles async APIs, worker threads handle custom logic.

## Event Loop Queues

### Macro Task Queue
- Contains tasks like setTimeout, setInterval, and I/O callbacks.

### Micro Task Queue
- Contains Promise callbacks and process.nextTick.

### Execution Priority
- Current execution
- Micro task queue
- Macro task queue

Micro tasks always execute before macro tasks.
