module.exports = (test) => {
  test(`1373`, {
    type: "Program",
    body: {
      type: "NumericLiteral",
      value: 1373,
    },
  });
  test(`"hello"`, {
    type: "Program",
    body: {
      type: "StringLiteral",
      value: "hello",
    },
  });
  test(`'hello'`, {
    type: "Program",
    body: {
      type: "StringLiteral",
      value: "hello",
    },
  });
};
