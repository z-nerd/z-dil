import { Lexer } from "./lexer"
import { TOKEN_CHARS, TokenType } from "./tokens"

export const Assign = (l: Lexer) => {
  if (l.char() === "=") {
    l.addToken({ type: TokenType.ASSIGN, value: l.char() })
    l.pos++ // Skip the =
    return true
  }
  return false
}

export const TokenChars = (l: Lexer) => {
  const char = TOKEN_CHARS[l.char()]
  if (char) {
    l.addToken({ type: char as any, value: l.char() })
    l.pos++ // Skip the =
    return true
  }
  return false
}

export const GreaterThanEqal = (l: Lexer) => {
  if (l.char() === ">" && l.peek() === "=") {
    l.addToken({ type: TokenType.GREATER_THAN_EQAL, value: ">=" })
    l.pos += 2 // Skip the >=
    return true
  }
  return false
}

export const LessThanEqal = (l: Lexer) => {
  if (l.char() === "<" && l.peek() === "=") {
    l.addToken({ type: TokenType.LESS_THAN_EQAL, value: "<=" })
    l.pos += 2 // Skip the <=
    return true
  }
  return false
}

export const Eqal = (l: Lexer) => {
  if (l.char() === "=" && l.peek() === "=") {
    l.addToken({ type: TokenType.EQAL, value: "==" })
    l.pos += 2 // Skip the ==
    return true
  }
  return false
}

export const NotEqal = (l: Lexer) => {
  if (l.char() === "!" && l.peek() === "=") {
    l.addToken({ type: TokenType.NOT_EQAL, value: "!=" })
    l.pos += 2 // Skip the !=
    return true
  }
  return false
}

export const ArrowFunction = (l: Lexer) => {
  if (l.char() === "=" && l.peek() === ">") {
    l.addToken({ type: TokenType.ARROW_FUNCTION, value: "=>" })
    l.pos += 2 // Skip the =>
    return true
  }
  return false
}
