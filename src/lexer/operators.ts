import { Lexer } from "."

export const Assign = (l: Lexer) => {
  if (l.char() === "=") {
    l.addToken({ type: "ASSIGN" })
    l.pos++ // Skip the =
    return true
  }
  return false
}

export const Multiply = (l: Lexer) => {
  if (l.char() === "*") {
    l.addToken({ type: "MULTIPLY" })
    l.pos++ // Skip the *
    return true
  }
  return false
}

export const Divide = (l: Lexer) => {
  if (l.char() === "/") {
    l.addToken({ type: "DIVIDE" })
    l.pos++ // Skip the /
    return true
  }
  return false
}

export const Plus = (l: Lexer) => {
  if (l.char() === "+") {
    l.addToken({ type: "PLUS" })
    l.pos++ // Skip the +
    return true
  }
  return false
}

export const Minus = (l: Lexer) => {
  if (l.char() === "-") {
    l.addToken({ type: "MINUS" })
    l.pos++ // Skip the -
    return true
  }
  return false
}

export const OpenParen = (l: Lexer) => {
  if (l.char() === "(") {
    l.addToken({ type: "OPEN_PARENTHESIS" })
    l.pos++ // Skip the (
    return true
  }
  return false
}

export const CloseParen = (l: Lexer) => {
  if (l.char() === ")") {
    l.addToken({ type: "CLOSE_PARENTHESIS" })
    l.pos++ // Skip the )
    return true
  }
  return false
}

export const OpenBrace = (l: Lexer) => {
  if (l.char() === "{") {
    l.addToken({ type: "OPEN_BRACE" })
    l.pos++ // Skip the {
    return true
  }
  return false
}

export const CloseBrace = (l: Lexer) => {
  if (l.char() === "}") {
    l.addToken({ type: "CLOSE_BRACE" })
    l.pos++ // Skip the }
    return true
  }
  return false
}

export const Semicolon = (l: Lexer) => {
  if (l.char() === ";") {
    l.addToken({ type: "SEMICOLON" })
    l.pos++ // Skip the ;
    return true
  }
  return false
}

export const Comma = (l: Lexer) => {
  if (l.char() === ",") {
    l.addToken({ type: "SEMICOLON" })
    l.pos++ // Skip the ,
    return true
  }
  return false
}

export const TowDots = (l: Lexer) => {
  if (l.char() === ":") {
    l.addToken({ type: "TYPE_ANNOTATION" })
    l.pos++ // Skip the :
    return true
  }
  return false
}

export const GreaterThan = (l: Lexer) => {
  if (l.char() === ">") {
    l.addToken({ type: "GREATER_THAN" })
    l.pos++ // Skip the >
    return true
  }
  return false
}

export const GreaterThanEqal = (l: Lexer) => {
  if (l.char() === ">" && l.peek() === "=") {
    l.addToken({ type: "GREATER_THAN_EQAL" })
    l.pos += 2 // Skip the >=
    return true
  }
  return false
}

export const LessThan = (l: Lexer) => {
  if (l.char() === "<") {
    l.addToken({ type: "LESS_THAN" })
    l.pos++ // Skip the <
    return true
  }
  return false
}

export const LessThanEqal = (l: Lexer) => {
  if (l.char() === "<" && l.peek() === "=") {
    l.addToken({ type: "LESS_THAN_EQAL" })
    l.pos += 2 // Skip the <=
    return true
  }
  return false
}

export const Eqal = (l: Lexer) => {
  if (l.char() === "=" && l.peek() === "=") {
    l.addToken({ type: "EQAL" })
    l.pos += 2 // Skip the ==
    return true
  }
  return false
}

export const NotEqal = (l: Lexer) => {
  if (l.char() === "!" && l.peek() === "=") {
    l.addToken({ type: "NOT_EQAL" })
    l.pos += 2 // Skip the !=
    return true
  }
  return false
}

export const ArrowFunction = (l: Lexer) => {
  if (l.char() === "=" && l.peek() === ">") {
    l.addToken({ type: "ARROW_FUNCTION" })
    l.pos += 2 // Skip the =>
    return true
  }
  return false
}
