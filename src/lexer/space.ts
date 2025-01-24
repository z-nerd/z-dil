import { Lexer } from "."

export const Space = (l: Lexer) => {
  // Skip whitespace
  if (/\s/.test(l.char())) {
    // Check for newline
    if (l.char() === "\n") l.addToken({ type: "EOL" })

    l.pos++
    return true
  }
  return false
}
