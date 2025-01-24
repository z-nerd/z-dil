export type Token =
  | { type: "NUMBER"; value: number }
  | { type: "IDENTIFIER"; value: string }
  | { type: "COMMENT"; value: string }
  | { type: "BACKTICK"; value: string }
  | { type: "DOUBLE_QUOTE"; value: string }
  | { type: "SINGLE_QUOTE"; value: string }
  | { type: "TYPE_ANNOTATION" }
  | { type: "RETURN"; value: string }
  | { type: "OPEN_PARENTHESIS" }
  | { type: "CLOSE_PARENTHESIS" }
  | { type: "OPEN_BRACE" }
  | { type: "CLOSE_BRACE" }
  | { type: "SEMICOLON" }
  | { type: "COMMA" }
  | { type: "PLUS" }
  | { type: "MINUS" }
  | { type: "MULTIPLY" }
  | { type: "DIVIDE" }
  | { type: "ASSIGN" }
  | { type: "LET" }
  | { type: "ARROW_FUNCTION" }
  | { type: "EQAL" }
  | { type: "NOT_EQAL" }
  | { type: "GREATER_THAN" }
  | { type: "GREATER_THAN_EQAL" }
  | { type: "LESS_THAN" }
  | { type: "LESS_THAN_EQAL" }
  | { type: "UNKNOWN"; value: string }
  | { type: "EOL" }
  | { type: "EOF" }

// export enum TokenType {
//   NUMBER = "NUMBER",
//   IDENTIFIER = "IDENTIFIER",
//   KEYWORD = "KEYWORD",
//   OPERATOR = "OPERATOR",
//   PARENTHESIS_OPEN = "PARENTHESIS_OPEN", // (
//   PARENTHESIS_CLOSE = "PARENTHESIS_CLOSE", // )
//   BRACE_OPEN = "BRACE_OPEN", // {
//   BRACE_CLOSE = "BRACE_CLOSE", // }
//
//   DOUBLE_QUOTE = "DOUBLE_QUOTE", // String literal
//   SINGLE_QUOTE = "SINGLE_QUOTE", // Character literal
//   BACKTICK = "BACKTICK", // BACKTICK literal (note need dynamic logic with fmt lib for template)
//
//   WHITESPACE = "WHITESPACE",
//   SEMICOLON = "SEMICOLON",
//   COMMA = "COMMA", // Comma
//   COMMENT = "COMMENT", // Comment
//   UNKNOWN = "UNKNOWN",
//
//   TYPE_ANNOTATION = "TYPE_ANNOTATION", // Type annotation
//   ARROW_FUNCTION = "ARROW_FUNCTION", // Arrow function
//
//   RETURN = "RETURN", // RETUEN
//
//   EOL = "EOL", // End of line
//   EOF = "EOF", // End of file
// }

// export const operators: Set<string> = new Set([
//   "=",
//   "+",
//   "-",
//   "*",
//   "/",
//   ">",
//   "<",
//   ">=",
//   "<=",
//   "==",
//   "!=",
// ])
//
// export const keywords: Set<string> = new Set([
//   "i8",
//   "i16",
//   "i32",
//   "i64",
//   "i128",
//   "isize",
//
//   "u8",
//   "u16",
//   "u32",
//   "u64",
//   "u128",
//   "usize",
//
//   "f32",
//   "f64",
//
//   "bool",
//   "true",
//   "false",
//
//   "NaN",
//   "Infinity",
//
//   "char",
//   "string",
//
//   "as",
//
//   "let",
//   "const",
//
//   "fn",
//   "return",
//   "async",
//   "await",
//
//   "struct",
//   "enum",
//   "this",
//
//   "if",
//   "else",
//   "match",
//
//   "for",
//   "of",
//   "in",
//
//   "try",
//   "catch",
// ])
