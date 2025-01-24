import { Lexer } from "."
import { isAlpabit, isAlpabitNumeric } from "./utils"

export const Keywords = (l: Lexer) => {
  // Match identifiers and keywords
  if (isAlpabit(l.char())) {
    let value = ""
    while (isAlpabitNumeric(l.char())) {
      value += l.char()
      l.pos++
    }

    switch (value) {
      case "return": {
        l.addToken({ type: "RETURN", value })
        break
      }
      default: {
        l.addToken({ type: "IDENTIFIER", value })
        break
      }
    }

    return true
  }

  return false
}
