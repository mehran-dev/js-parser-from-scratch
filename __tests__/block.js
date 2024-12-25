module.exports = (test) => {
  test(
    `
        {
        45;
        "hello";
        }
        `,
    {
      type: "Program",
      body: [
        {
          type: "BlockStatement",
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
        },
      ],
    }
  );
  test(
    `
    {


    }`,
    {
      type: "Program",
      body: [
        {
          type: "BlockStatement",
          body: [],
        },
      ],
    }
  );
  test(
    `
        {
        45;
        {
          "hello";
          }
        }
        `,
    {
      type: "Program",
      body: [
        {
          type: "BlockStatement",
          body: [
            {
              type: "ExpressionStatement",
              expression: {
                type: "NumericLiteral",
                value: 45,
              },
            },
            {
              type: "BlockStatement",
              body: [
                {
                  type: "ExpressionStatement",
                  expression: {
                    type: "StringLiteral",
                    value: "hello",
                  },
                },
              ],
            },
          ],
        },
      ],
    }
  );
};
