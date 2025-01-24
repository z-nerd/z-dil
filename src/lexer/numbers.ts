import { Lexer } from "."
import { isDigit } from "./utils"

export const Numbers = (l: Lexer) => {
  // Match numbers
  if (isDigit(l.char())) {
    let value = ""
    while (isDigit(l.char())) {
      value += l.char()
      l.pos++
    }

    l.addToken({ type: "NUMBER", value: parseFloat(value) })
    return true
  }
  return false
}
