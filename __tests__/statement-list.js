module.exports = (test) => {
  test(
    `
        45;
        "hello";
        `,
    {
      type: "Program",
      body: [
        {
          type: "ExpressionStatement",
          expression: {
            type: "NumericLiteral",
            value: 45,
          },
        },
        {
          type: "ExpressionStatement",
          expression: {
            type: "StringLiteral",
            value: "hello",
          },
        },
      ],
    }
  );
};
