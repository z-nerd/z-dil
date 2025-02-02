export enum TokenType {
  COMMENT = "COMMENT",
  BACKTICK = "BACKTICK",
  DOUBLE_QUOTE = "DOUBLE_QUOTE",
  SINGLE_QUOTE = "SINGLE_QUOTE",
  NUMBER = "NUMBER",

  ARROW_FUNCTION = "ARROW_FUNCTION",

  EQAL = "EQAL",
  NOT_EQAL = "NOT_EQAL",
  LESS_THAN_EQAL = "LESS_THAN_EQAL",
  GREATER_THAN_EQAL = "GREATER_THAN_EQAL",

  ASSIGN = "ASSIGN",

  OPEN_PARENTHESIS = "OPEN_PARENTHESIS",
  CLOSE_PARENTHESIS = "CLOSE_PARENTHESIS",
  OPEN_BRACE = "OPEN_BRACE",
  CLOSE_BRACE = "CLOSE_BRACE",
  OPEN_BRACKET = "OPEN_BRACKET",
  CLOSE_BRACKET = "CLOSE_BRACKET",
  DOT = "DOT",
  MULTIPLY = "MULTIPLY",
  DIVIDE = "DIVIDE",
  REMAINDER = "REMAINDER",
  PLUS = "PLUS",
  MINUS = "MINUS",
  LESS_THAN = "LESS_THAN",
  GREATER_THAN = "GREATER_THAN",
  SEMICOLON = "SEMICOLON",
  COLON = "COLON",
  COMMA = "COMMA",
  BAR = "BAR",

  I8 = "i8",
  I16 = "I16",
  I32 = "I32",
  I64 = "I64",
  I128 = "I128",
  ISIZE = "ISIZE",

  U8 = "U8",
  U16 = "U16",
  U32 = "U32",
  U64 = "U64",
  U128 = "U128",
  USIZE = "USIZE",

  F32 = "F32",
  F64 = "F64",

  CHAR = "CHAR",
  STRING = "STRING",

  BOOL = "BOOL",
  FALSE = "FALSE",
  TRUE = "TRUE",

  NAN = "NAN",
  INFINITY = "INFINITY",

  AS = "AS",

  LET = "LET",
  CONST = "CONST",

  IF = "IF",
  ELSE = "ELSE",
  MATCH = "MATCH",

  FOR = "FOR",
  OF = "OF",
  IN = "IN",

  FN = "FN",
  RETURN = "RETURN",

  ENUM = "ENUM",
  STRUCT = "STRUCT",
  SELF = "SELF",

  ASYNC = "ASYNC",
  AWAIT = "AWAIT",

  TRY = "TRY",
  CATCH = "CATCH",

  IDENTIFIER = "IDENTIFIER",

  UNKNOWN = "UNKNOWN",

  EOL = "EOL",
  EOF = "EOF",
}

export const TOKEN_CHARS: Record<string, TokenType> = {
  "(": TokenType.OPEN_PARENTHESIS,
  ")": TokenType.CLOSE_PARENTHESIS,
  "{": TokenType.OPEN_BRACE,
  "}": TokenType.CLOSE_BRACE,
  "[": TokenType.OPEN_BRACKET,
  "]": TokenType.CLOSE_BRACKET,
  ".": TokenType.DOT,
  "*": TokenType.MULTIPLY,
  "/": TokenType.DIVIDE,
  "%": TokenType.REMAINDER,
  "+": TokenType.PLUS,
  "-": TokenType.MINUS,
  "<": TokenType.LESS_THAN,
  ">": TokenType.GREATER_THAN,
  ";": TokenType.SEMICOLON,
  ":": TokenType.COLON,
  ",": TokenType.COMMA,
  "|": TokenType.BAR,
}

export const KEYWORDS: Record<string, TokenType> = {
  i8: TokenType.I8,
  i16: TokenType.I16,
  i32: TokenType.I32,
  i64: TokenType.I64,
  i128: TokenType.I128,
  isize: TokenType.ISIZE,

  u8: TokenType.U8,
  u16: TokenType.U16,
  u32: TokenType.U32,
  u64: TokenType.U64,
  u128: TokenType.U128,
  usize: TokenType.USIZE,

  f32: TokenType.F32,
  f64: TokenType.F64,

  char: TokenType.CHAR,
  string: TokenType.STRING,

  bool: TokenType.BOOL,
  false: TokenType.FALSE,
  true: TokenType.TRUE,

  NaN: TokenType.NAN,
  Infinity: TokenType.INFINITY,

  as: TokenType.AS,

  let: TokenType.LET,
  const: TokenType.CONST,

  if: TokenType.IF,
  else: TokenType.ELSE,
  match: TokenType.MATCH,

  for: TokenType.FOR,
  of: TokenType.OF,
  in: TokenType.IN,

  fn: TokenType.FN,
  return: TokenType.RETURN,

  enum: TokenType.ENUM,
  struct: TokenType.STRUCT,
  self: TokenType.SELF,

  async: TokenType.ASYNC,
  await: TokenType.AWAIT,

  try: TokenType.TRY,
  catch: TokenType.CATCH,
}

export type Token = { type: TokenType; value: string }
