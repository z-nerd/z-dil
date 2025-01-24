import { MultiLineComments, SingleLineComments } from "./comments"
import { Keywords } from "./keywords"
import { Numbers } from "./numbers"
import {
  ArrowFunction,
  CloseBrace,
  CloseParen,
  Comma,
  Divide,
  Assign,
  Minus,
  Multiply,
  OpenBrace,
  OpenParen,
  Plus,
  Semicolon,
  TowDots,
  Eqal,
  NotEqal,
  LessThanEqal,
  LessThan,
  GreaterThan,
  GreaterThanEqal,
} from "./operators"
import { Space } from "./space"
import {
  BacktickLiterals,
  DubleQuteLiterals,
  SingleQuteLiterals,
} from "./string"
import { Token } from "./tokens"

export class Lexer {
  #tokens: Token[]
  sourceCode?: string
  pos: number

  get tokens() {
    return this.#tokens
  }

  static #instance?: Lexer
  static getInstance(): Lexer {
    if (!Lexer.#instance) {
      Lexer.#instance = new Lexer()
    }
    return Lexer.#instance
  }

  private constructor() {
    if (Lexer.#instance) {
      throw new Error("Use Scanner.getInstance() to get the instance.")
    }
    this.#tokens = []
    this.pos = 0
  }

  addToken(token: Token) {
    this.#tokens.push(token)
  }

  char(): string {
    return this.sourceCode![this.pos]
  }

  peek(): string {
    return this.sourceCode![this.pos + 1]
  }

  isEOF(): boolean {
    return this.pos < this.sourceCode!.length
  }

  tokenize(sourceCode: string): Token[] {
    this.#tokens = []
    this.pos = 0
    this.sourceCode = sourceCode

    while (this.isEOF()) {
      if (Space(this)) continue

      if (MultiLineComments(this)) continue
      if (SingleLineComments(this)) continue

      if (BacktickLiterals(this)) continue
      if (DubleQuteLiterals(this)) continue
      if (SingleQuteLiterals(this)) continue

      if (ArrowFunction(this)) continue

      if (Numbers(this)) continue

      if (OpenParen(this)) continue
      if (CloseParen(this)) continue

      if (OpenBrace(this)) continue
      if (CloseBrace(this)) continue

      if (Eqal(this)) continue
      if (NotEqal(this)) continue
      if (LessThan(this)) continue
      if (LessThanEqal(this)) continue
      if (GreaterThan(this)) continue
      if (GreaterThanEqal(this)) continue

      if (Assign(this)) continue
      if (Multiply(this)) continue
      if (Divide(this)) continue
      if (Plus(this)) continue
      if (Minus(this)) continue

      if (TowDots(this)) continue
      if (Semicolon(this)) continue
      if (Comma(this)) continue

      if (Keywords(this)) continue

      // Unknown character
      this.addToken({ type: "UNKNOWN", value: this.char() })
      this.pos++
    }

    this.addToken({ type: "EOF" })

    return this.#tokens
  }
}
