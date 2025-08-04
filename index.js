const { Person } = require("./person");

const person = new Person("John Doe");

// require("./modules/path");

require("./modules/fs");

console.log(person.sayMyName());
