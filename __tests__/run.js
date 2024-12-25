const { Parser } = require("../src/parser.js");

const parser = new Parser();

const tests = [
  require("../__tests__/literal.js"),
  require("../__tests__/statement-list.js"),
  require("../__tests__/block.js"),
];
const assert = require("assert");
function exec() {
  const program = `           42;  //goaway
    /* 
    mmulti line comments 
    */
   23;
   `;

  const ast = parser.parse(program);

  console.log("====================================");
  console.log(JSON.stringify(ast, null, 2));
  console.log("====================================");
}

exec();

tests.forEach((testRun) => {
  testRun(test);
});

function test(program, expected) {
  const ast = parser.parse(program);
  assert.deepEqual(ast, expected);
}

console.log("====================================");
console.log("All assertion passed ");
console.log("====================================");
