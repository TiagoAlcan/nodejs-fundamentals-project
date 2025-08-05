// const { Person } = require("./person");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase(); // Conectando ao MongoDB

// const person = new Person("John Doe");

// require("./modules/path");

// require("./modules/fs");

// require("./modules/http");

// require("./modules/express");

// console.log(person.sayMyName());
