import { TokenType } from "../lexer/tokens"
import { Parser } from "./parser"
import { BinaryExpression, Expression } from "../ast"

export const MultipliciotaveExpression = (p: Parser): Expression => {
  let left = p.parse_primary_expression()

  while (
    p.token().type === TokenType.MULTIPLY ||
    p.token().type === TokenType.DIVIDE ||
    p.token().type === TokenType.REMAINDER
  ) {
    const operator = p.token().value
    p.pos++
    const right = p.parse_primary_expression()

    left = {
      type: "BinaryExpression",
      left,
      right,
      operator,
    } as BinaryExpression
  }

  return left
}
