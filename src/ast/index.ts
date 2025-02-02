export type NodeType =
  // STATEMENTS
  | "Program"
  | "ExpressionStatement"
  | "BlockStatement"
  | "VariableDeclaration"
  | "FunctionDeclaration"
  | "ReturnStatement"
  | "IfStatement"
  | "ForStatement"
  | "TryCatchStatement"

  // EXPRESSIONS
  | "AssignmentExpression"
  | "BinaryExpression"
  | "MemberExpression"
  | "CallExpression"

  // LITERALS
  | "Property"
  | "ArrayLiteral"
  | "NumericLiteral"
  | "Identifier"
  | "StringLiteral"

  // Others
  | "Identifier"
  | "VariableDeclarator"

export interface Statement {
  type: NodeType
  start: number
  end: number
}

export interface Program extends Statement {
  type: "Program"
  body: Statement[]
  sourceType: string
}

export interface Expression extends Statement {}

export interface BinaryExpression extends Expression {
  type: "BinaryExpression"
  operator: string
  left: Expression
  right: Expression
}

export interface NumericLiteral extends Expression {
  type: "NumericLiteral"
  value: number
}

export interface Identifier extends Expression {
  type: "Identifier"
  name: string
}

export interface AssignmentExpression extends Expression {
  type: "AssignmentExpression"
  operator: string
  left: Statement
  right: Statement
}

// export interface ArrowFunctionExpression extends Node {
//   type: "ArrowFunctionExpression"
//   params: Identifier[]
//   body: BlockStatement | ExpressionStatement
// }

export interface VariableDeclaration extends Statement {
  type: "VariableDeclaration"
  declarations: VariableDeclarator[]
  kind: "let" | "const"
}

export interface VariableDeclarator extends Statement {
  type: "VariableDeclarator"
  id: Identifier
  init: Statement | null
}

export interface FunctionDeclaration extends Statement {
  type: "FunctionDeclaration"
  id: Identifier
  params: Identifier[]
  body: BlockStatement
}

export interface CallExpression extends Expression {
  type: "CallExpression"
  callee: Statement
  arguments: Statement[]
}

export interface BlockStatement extends Statement {
  type: "BlockStatement"
  body: Statement[]
}

export interface ReturnStatement extends Statement {
  type: "ReturnStatement"
  argument: Statement | null
}

export interface IfStatement extends Statement {
  type: "IfStatement"
  test: Statement
  consequent: BlockStatement
  alternate: BlockStatement | null
}

// export interface Literal extends Node {
//   type: "Literal"
//   value: string | number | boolean | null
// }

export interface MemberExpression extends Expression {
  type: "MemberExpression"
  object: Statement
  property: Statement
  computed: boolean
}

// export interface ObjectExpression extends Node {
//   type: "ObjectExpression"
//   properties: Property[]
// }

export interface Property extends Statement {
  type: "Property"
  key: Identifier
  value: Statement
}

export interface ArrayLiteral extends Statement {
  kind: "ArrayLiteral"
  values: Statement[]
}

// export interface TypeAnnotation extends Node {
//   type: "TypeAnnotation"
//   typeAnnotation: string
// }
