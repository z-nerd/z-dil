import { createInterface } from "node:readline/promises"
import { Parser } from "./parser/parser"
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
})

const cliTest = async () => {
  const parser = Parser.getInstance()
  while (true) {
    const input = await rl.question("> ")

    if (!input || input === "exit") {
      rl.close()
      break
    }

    const program = parser.parse(input)
    console.log(JSON.stringify(program, null, 1))
  }
}
cliTest()

// const str = `class Book {
//   addBook() {}
//   removeBook() {}
//   static getOneBook() {}
// }`
//
// const str2 = `let x = 10 + 20;
// const y = 30;
// if (x > y) {
// return x;
// }`
//
// const str3 = `
// // single line comment
// let x = "Hello, World!";
// let x: i8 = 10;
// const y = 'A';
//
// /*
// * multi line comment
// * test done!
// */
// if (x > y) {
//   return x;
// }`
//
// const str4 = `let add = (x: i8, y:i8) => {
//   return x + y;
// }`
//
// const str5 = `struct Person {
//   name: string,
//   age: i8,
//   sex: bool,
//   greeting: (type: string) => {
//     return \`\${type}, \${this.name}!\`
//   }
// }`
//
// const str6 = `let x = y as number;`
// const str7 = `// test this single line
// fn add(x: i8, y:i8): i8 => {
//   return x + y;
// }`
//
// const str8 = `const name:String[]= ["zero", "naruto"]`

// console.log(lexer.tokenize(str))
// console.log(lexer.tokenize(str2))
// console.log(lexer.tokenize(str3))
// console.log(lexer.tokenize(str4))
// console.log(lexer.tokenize(str5))
// console.log(lexer.tokenize(str6))
// console.log(lexer.tokenize(str7))
// console.log(lexer.tokenize(str8))
