const { Person } = require("./person");

const person = new Person("John Doe");

// require("./modules/path");

// require("./modules/fs");

// require("./modules/http");

require("./modules/express");

console.log(person.sayMyName());
