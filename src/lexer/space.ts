import { Lexer } from "./lexer"
import { TokenType } from "./tokens"

export const Space = (l: Lexer) => {
  // Skip whitespace
  if (/\s/.test(l.char())) {
    // Check for newline
    if (l.char() === "\n") l.addToken({ type: TokenType.EOL })

    l.pos++
    return true
  }
  return false
}
