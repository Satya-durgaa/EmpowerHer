
import os from "os";
import fs from "fs/promises";

// Part A – OS Module
console.log("Free Memory:", os.freemem());
console.log("Total CPU Cores:", os.cpus().length);

// Part B – File System CRUD Operations
async function fileOperations() {
  try {
    // Create data.txt
    await fs.writeFile("data.txt", "Hello World");
    console.log("data.txt created");

    // Create Readme.md
    await fs.writeFile("Readme.md", "## This is first line in Readme");
    console.log("Readme.md created");

    // Read data.txt
    const data = await fs.readFile("data.txt", "utf-8");
    console.log("Content of data.txt:", data);

    // Append to data.txt
    await fs.appendFile("data.txt", "\nThis is second line");
    console.log("Data appended to data.txt");

    // Delete Readme.md
    await fs.unlink("Readme.md");
    console.log("Readme.md deleted");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fileOperations();
