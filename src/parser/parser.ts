import { Lexer } from "../lexer/lexer"
import { Statement, Program, Expression, BinaryExpression } from "../ast"
import { Token, TokenType } from "../lexer/tokens"
import { PrimaryExpression } from "./PrimaryExpression"
import { AdditiveExpression } from "./AdditiveExpression"
import { MultipliciotaveExpression } from "./MultipliciotaveExpression"

export class Parser {
  #lexer: Lexer
  #tokens: Token[]
  pos: number

  static #instance?: Parser
  static getInstance(): Parser {
    if (!Parser.#instance) {
      Parser.#instance = new Parser()
    }
    return Parser.#instance
  }

  private constructor() {
    if (Parser.#instance) {
      throw new Error("Use Parser.getInstance() to get the instance.")
    }

    this.#lexer = Lexer.getInstance()
    this.#tokens = []
    this.pos = 0
  }

  token(): Token {
    return this.#tokens![this.pos]
  }

  peek(): Token {
    return this.#tokens![this.pos + 1]
  }

  isEOF(): boolean {
    return this.#tokens![this.pos].type !== TokenType.EOF
  }

  expect(type: TokenType, error: any) {
    const tk = this.token()
    if (!tk || tk.type !== type)
      throw new Error(`Parser Error:\n${error}\n - Expecting: ${type}`)
    this.pos++

    return tk
  }

  #ast(): Program {
    const program: Program = {
      type: "Program",
      sourceType: "main",
      start: 0,
      end: 0,
      body: [],
    }

    while (this.isEOF()) {
      program.body.push(this.parse_statement())
    }

    return program
  }

  parse(sourceCode: string): Program {
    this.pos = 0
    this.#tokens = this.#lexer.tokenize(sourceCode)
    // console.log(this.#tokens)
    return this.#ast()
  }

  parse_statement(): Statement {
    return this.parse_expression()
  }

  parse_expression(): Expression {
    return this.parse_additive_expression()
  }

  parse_additive_expression(): Expression {
    return AdditiveExpression(this)
  }

  parse_multipliciotave_expression(): Expression {
    return MultipliciotaveExpression(this)
  }

  parse_primary_expression(): Expression {
    return PrimaryExpression(this)
  }
}
