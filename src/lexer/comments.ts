import { Lexer } from "."

export const SingleLineComments = (l: Lexer) => {
  if (l.char() === "/" && l.peek() === "/") {
    let value = ""
    while (l.isEOF() && l.char() !== "\n") {
      value += l.char()
      l.pos++
    }
    l.addToken({ type: "COMMENT", value })
    return true
  }

  return false
}

export const MultiLineComments = (l: Lexer) => {
  if (l.char() === "/" && l.peek() === "*") {
    let value = ""
    value += l.char() // Add the opening slash
    value += l.peek() // Add the opening asterisk
    l.pos += 2 // Skip the opening comment markers
    while (l.isEOF() && !(l.char() === "*" && l.peek() === "/")) {
      value += l.char()
      l.pos++
    }
    if (l.isEOF()) {
      value += l.char() // Add the closing asterisk
      l.pos++
      value += l.char() // Add the closing slash
    }
    l.addToken({ type: "COMMENT", value })
    l.pos++ // Skip the closing comment marker
    return true
  }
  return false
}
