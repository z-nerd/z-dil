import { TokenType } from "../lexer/tokens"
import { Parser } from "./parser"
import { Expression, Identifier, NumericLiteral } from "../ast"

export const PrimaryExpression = (p: Parser): Expression => {
  const tk = p.token()

  switch (tk.type) {
    case TokenType.IDENTIFIER: {
      p.pos++
      return { type: "Identifier", name: tk.value } as Identifier
    }

    case TokenType.NUMBER: {
      p.pos++
      return {
        type: "NumericLiteral",
        value: parseFloat(tk.value),
      } as NumericLiteral
    }

    case TokenType.OPEN_PARENTHESIS: {
      p.pos++ // remove ( paren
      const value = p.parse_expression()
      p.expect(
        TokenType.CLOSE_PARENTHESIS,
        `Unexpected token found inside parenthesis. Expected close parenthesis.`,
      ) // remove ) paren
      return value
    }

    default: {
      throw new Error(
        `Unexpected token found during parsing! ${JSON.stringify(tk, null, 2)}`,
      )
    }
  }
}
