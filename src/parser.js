const { Tokenizer } = require("./tokenizer");

class Parser {
  constructor() {
    this._string = "";
    this._tokenizer = new Tokenizer();
  }
  parse(string) {
    this._string = string;
    this._tokenizer.init(string);
    this._lookahead = this._tokenizer.getNextToken();

    return this.Program();
  }

  Program() {
    return {
      type: "Program",
      body: this.StatementList(),
    };
  }
  StatementList(stopLookahead = null) {
    const statementList = [this.Statement()];

    while (this._lookahead != null && this._lookahead.type !== stopLookahead) {
      statementList.push(this.Statement());
    }

    return statementList;
  }

  Statement() {
    switch (this._lookahead.type) {
      case ";":
        return this.EmptyStatement();
      case "{":
        return this.BlockStatement();
      default:
        return this.ExpressionStatement();
    }
  }

  EmptyStatement() {
    this._eat(";");
    return {
      type: "EmptyStatement",
    };
  }
  BlockStatement() {
    this._eat("{");
    const body = this._lookahead.type !== "}" ? this.StatementList("}") : [];
    this._eat("}");

    return {
      type: "BlockStatement",
      body,
    };
  }
  ExpressionStatement() {
    const expression = this.Expression();
    this._eat(";");
    return {
      type: "ExpressionStatement",
      expression,
    };
  }
  Expression() {
    return this.Literal();
  }
  Literal() {
    switch (this._lookahead.type) {
      case "NUMBER":
        return this.NumericLiteral();
      case "STRING":
        return this.StringLiteral();

      default:
        throw new SyntaxError("Literal: unexpected literal production ");
    }
  }

  _eat(tokenType) {
    const token = this._lookahead;
    if (token == null) {
      throw new SyntaxError(
        `Unexpected end of input , expected "${tokenType}"`
      );
    }

    if (token.type !== tokenType) {
      throw new SyntaxError(
        `Unexpected token "${token.value}" , expected "${tokenType}"`
      );
    }

    this._lookahead = this._tokenizer.getNextToken();

    return token;
  }
  NumericLiteral() {
    const token = this._eat("NUMBER");
    return {
      type: "NumericLiteral",
      value: Number(token.value),
    };
  }
  StringLiteral() {
    const token = this._eat("STRING");
    return {
      type: "StringLiteral",
      value: token.value.slice(1, -1),
    };
  }
}

module.exports = {
  Parser,
};
