import { Lexer } from "./lexer"
import { TokenType } from "./tokens"
import { isDigit } from "./utils"

export const Numbers = (l: Lexer) => {
  // Match numbers
  if (isDigit(l.char())) {
    let value = ""
    while (l.isEOF() && isDigit(l.char())) {
      value += l.char()
      l.pos++
    }

    l.addToken({ type: TokenType.NUMBER, value: value })
    return true
  }
  return false
}
