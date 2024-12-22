const { Parser } = require("../src/parser.js");

const parser = new Parser();

const program = `'42'`;

const ast = parser.parse(program);

console.log("====================================");
console.log(JSON.stringify(ast, null, 2));
console.log("====================================");
