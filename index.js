const { Person } = require("./person");

const person = new Person("John Doe");

// require("./modules/path");

// require("./modules/fs");

require("./modules/http");

console.log(person.sayMyName());
