export type NodeType =
  | "Program"
  | "ExpressionStatement"
  | "BinaryExpression"
  | "AssignmentExpression"
  | "ArrowFunctionExpression"
  | "NumericLiteral"
  | "VariableDeclaration"
  | "VariableDeclarator"
  | "FunctionDeclaration"
  | "CallExpression"
  | "Identifier"
  | "BlockStatement"
  | "ReturnStatement"
  | "IfStatement"
  | "Literal"
  | "MemberExpression"
  | "ObjectExpression"
  | "Property"
  | "TypeAnnotation"

export interface Node {
  type: NodeType
}

export interface Program extends Node {
  type: "Program"
  body: Node[]
}

export interface ExpressionStatement extends Node {
  type: "ExpressionStatement"
  expression: Node
}

export interface BinaryExpression extends Node {
  type: "BinaryExpression"
  operator: string
  left: Node
  right: Node
}

export interface AssignmentExpression extends Node {
  type: "AssignmentExpression"
  operator: string
  left: Node
  right: Node
}

export interface ArrowFunctionExpression extends Node {
  type: "ArrowFunctionExpression"
  params: Identifier[]
  body: BlockStatement | ExpressionStatement
}

export interface NumericLiteral extends Node {
  type: "NumericLiteral"
  value: number
}

export interface VariableDeclaration extends Node {
  type: "VariableDeclaration"
  declarations: VariableDeclarator[]
  kind: "let" | "const"
}

export interface VariableDeclarator extends Node {
  type: "VariableDeclarator"
  id: Identifier
  init: Node | null
}

export interface FunctionDeclaration extends Node {
  type: "FunctionDeclaration"
  id: Identifier
  params: Identifier[]
  body: BlockStatement
}

export interface CallExpression extends Node {
  type: "CallExpression"
  callee: Node
  arguments: Node[]
}

export interface Identifier extends Node {
  type: "Identifier"
  name: string
}

export interface BlockStatement extends Node {
  type: "BlockStatement"
  body: Node[]
}

export interface ReturnStatement extends Node {
  type: "ReturnStatement"
  argument: Node | null
}

export interface IfStatement extends Node {
  type: "IfStatement"
  test: Node
  consequent: BlockStatement
  alternate: BlockStatement | null
}

export interface Literal extends Node {
  type: "Literal"
  value: string | number | boolean | null
}

export interface MemberExpression extends Node {
  type: "MemberExpression"
  object: Node
  property: Node
  computed: boolean
}

export interface ObjectExpression extends Node {
  type: "ObjectExpression"
  properties: Property[]
}

export interface Property extends Node {
  type: "Property"
  key: Identifier
  value: Node
}

export interface TypeAnnotation extends Node {
  type: "TypeAnnotation"
  typeAnnotation: string
}
