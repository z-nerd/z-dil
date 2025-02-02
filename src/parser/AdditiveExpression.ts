import { TokenType } from "../lexer/tokens"
import { Parser } from "./parser"
import { BinaryExpression, Expression } from "../ast"

export const AdditiveExpression = (p: Parser): Expression => {
  let left = p.parse_multipliciotave_expression()

  while (
    p.token().type === TokenType.PLUS ||
    p.token().type === TokenType.MINUS
  ) {
    const operator = p.token().value
    p.pos++
    const right = p.parse_multipliciotave_expression()

    left = {
      type: "BinaryExpression",
      left,
      right,
      operator,
    } as BinaryExpression
  }

  return left
}
