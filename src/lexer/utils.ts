export const isDigit = (char: string) => {
  return /\d/.test(char)
}

export const isAlpabit = (char: string) => {
  return /[a-zA-Z_]/.test(char)
}

export const isAlpabitNumeric = (char: string) => {
  return /[a-zA-Z0-9_]/.test(char)
}

// export const isOperator = (str: string) => {
//   return operators.has(str)
// }
//
// export const isKeyword = (str: string) => {
//   return keywords.has(str)
// }
