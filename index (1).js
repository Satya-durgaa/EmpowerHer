// Import boxen module
const boxen = require("boxen");

// Define message and title
const message = "I am using my first external module!";
const title = "Hurray!!!";

// 1. Classic (default style)
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1
  })
);

// 2. SingleDouble style
console.log(
  boxen(message, {
    title: title,
    borderStyle: "singleDouble",
    padding: 1,
    margin: 1
  })
);

// 3. Round style
console.log(
  boxen(message, {
    title: title,
    borderStyle: "round",
    padding: 1,
    margin: 1
  })
);

// Bonus: Background color
console.log(
  boxen(message, {
    title: title,
    borderStyle: "round",
    padding: 1,
    margin: 1,
    backgroundColor: "yellow",
    borderColor: "blue"
  })
);
