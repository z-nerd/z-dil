import { Lexer } from "."

export const BacktickLiterals = (l: Lexer) => {
  // Match backtick literals
  if (l.char() === "`") {
    let value = ""
    l.pos++ // Skip the opening backtick
    while (l.isEOF() && l.char() !== "`") {
      value += l.char()
      l.pos++
    }
    l.pos++ // Skip the closing backtick
    l.addToken({ type: "BACKTICK", value })
    return true
  }

  return false
}

export const DubleQuteLiterals = (l: Lexer) => {
  // Match double literals
  if (l.char() === '"') {
    let value = ""
    l.pos++ // Skip the opening double quote
    while (l.isEOF() && l.char() !== '"' && l.char() !== "\n") {
      value += l.char()
      l.pos++
    }
    l.pos++ // Skip the closing double quote
    l.addToken({ type: "DOUBLE_QUOTE", value })
    return true
  }

  return false
}

export const SingleQuteLiterals = (l: Lexer) => {
  // Match single quote literals
  if (l.char() === "'") {
    let value = ""
    l.pos++ // Skip the opening single quote
    while (l.isEOF() && l.char() !== "'" && l.char() !== "\n") {
      value += l.char()
      l.pos++
    }
    l.pos++ // Skip the closing single quote

    l.addToken({ type: "SINGLE_QUOTE", value })
    return true
  }

  return false
}
