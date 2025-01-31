import { Lexer } from "./lexer"
import { KEYWORDS, TokenType } from "./tokens"
import { isAlpabit, isAlpabitNumeric } from "./utils"

export const Keywords = (l: Lexer) => {
  // Match identifiers and keywords
  if (isAlpabit(l.char())) {
    let value = ""
    while (isAlpabitNumeric(l.char())) {
      value += l.char()
      l.pos++
    }

    const reserved = KEYWORDS[value]
    if (reserved) l.addToken({ type: reserved as any })
    else l.addToken({ type: TokenType.IDENTIFIER, value })

    return true
  }

  return false
}
