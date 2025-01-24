import { Lexer } from "./lexer"

const scanner = Lexer.getInstance()

const str = `class Book {
  addBook() {}
  removeBook() {}
  static getOneBook() {}
}`

const str2 = `let x = 10 + 20;
const y = 30;
if (x > y) {
return x;
}`

const str3 = `
// single line comment
let x = "Hello, World!";
let x: i8 = 10;
const y = 'A';

/*
* multi line comment 
* test done!
*/
if (x > y) {
  return x;
}`

const str4 = `let add = (x: i8, y:i8) => {
  return x + y;
}`

const str5 = `struct Person {
  name: string,
  age: i8,
  sex: bool,
  greeting: (type: string) => {
    return \`\${type}, \${this.name}!\`
  }
}`

const str6 = `let x = y as number;`
const str7 = `// test this single line
fn add(x: i8, y:i8): i8 => {
  return x + y;
}`

// const tokens = scanner.tokenize(str7)
// console.log(tokens)

// console.log(scanner.tokenize(str))
// console.log(scanner.tokenize(str2))
console.log(scanner.tokenize(str3))
// console.log(scanner.tokenize(str4))
// console.log(scanner.tokenize(str5))
// console.log(scanner.tokenize(str6))
console.log(scanner.tokenize(str7))
