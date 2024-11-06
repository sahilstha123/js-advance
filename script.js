// Execution Context:
// The execution context defines how data (variables, functions, and objects)
// is accessed and used during the execution of code. Each function call creates
// a new execution context, with its own scope and variable definitions.

// var globalValue = "sahil"; // Declares a global variable 'globalValue' and initializes it with "sahil"

// The global execution context is created when the script is loaded, setting up the global scope,
// which includes 'globalValue' as a variable accessible anywhere within the script.

// Function Declaration: 'Name'
// function Name() {
// 'Name' function creates a new function execution context when called.
// In this context, it has access to all global variables, including 'globalValue'.

// console.log(globalValue); // Logs "sahil" to the console
// 'globalValue' is not defined locally within the function, so JavaScript looks
// in the outer (global) scope and finds 'globalValue' with the value "sahil".

// document.getElementById("demo").innerHTML = globalValue;
// Sets the innerHTML of the element with ID 'demo' to "sahil" (the value of 'globalValue' in global scope)
// }

// Calling the 'Name' function
// Name(); // Executes the function 'Name', logging "sahil" and updating the element content

// Function Declaration: 'anotherName'
// function anotherName() {
// When 'anotherName' is called, a new execution context is created for this function.
// In this context, a new local variable 'globalValue' is declared.

// var globalValue = "barsha"; // Declares a local variable 'globalValue' with value "barsha"
// This 'globalValue' is limited to the 'anotherName' function and does not affect the global 'globalValue'

// console.log(globalValue); // Logs "barsha" to the console
// Here, 'globalValue' refers to the local variable within 'anotherName', not the global one.
// }

// Calling the 'anotherName' function
// anotherName(); // Executes the function 'anotherName', logging "barsha"

// --------------lexical environment------------
//lexical :-  lexical refers to how code is organized based on its structure and order

// lexical environment : refers to local memory along with its lexical enviroment of the parent

// ******Example******

// function OuterSpace() {
//   var b = 10;
//   function innerSpace() {
//     var b = 20;
//     console.log(b); // access the data from the local memory
//     // tries to access  the data  from the local memory, then go to the lexical enviroment of outerspace
//   }
//   console.log(b);
//   return innerSpace();
// }
// const output = OuterSpace();
// output;

// -------------- Hoisting --------------
// Hoisting in JavaScript means moving declarations to the top of their scope before code execution.
// This means functions and variables can be used before they are actually declared in the code.

// Variables declared with `var` are hoisted to the top of their scope but are initialized as `undefined`.
// Variables declared with `let` and `const` are also hoisted, but they are placed in a Temporal Dead Zone (TDZ)
// until the execution reaches the actual line of declaration. Accessing them before this line will throw an error.

// Therefore, it is preferred to use `let` and `const` instead of `var` in modern JavaScript,
// as they prevent common issues associated with hoisting and make the code more predictable.

// example

// console.log(a);
// var a = 9; // gives undefined

// Variable Hoisting with `let`
//  "Cannot access 'a' before initialization"
// console.log(a);
// let a = 9; // `let` variables are hoisted but placed in a Temporal Dead Zone, so accessing `a` here will throw a ReferenceError.

// function example
// hello(); // Outputs: "hello hoisting" - Function declarations are fully hoisted, so this works fine

// function hello() {
//   console.log("hello hoisting");
// }

// function expression
// hi(); // gives hi is not defined
// let b = function hi() {
//   console.log("hello hoisting");
// };

// Arrow Function Hoisting with `const`
// greet(); // Error: "Cannot access 'greet' before initialization" because `greet` is treated as a variable
// const greet = () => {
//   console.log("hello hoisting");
// };

// Explanation of the above code :
// 1. **`var` Hoisting**: `var` is hoisted and initialized as `undefined`, so it can be accessed before assignment, but only as `undefined`.

// 2. **`let` and `const` Hoisting**: `let` and `const` are hoisted but placed in a Temporal Dead Zone, meaning they cannot be accessed before their line of declaration.

// 3. **Function Declarations**: Function declarations are fully hoisted, meaning they can be called before they appear in the code.

// 4. **Function Expressions and Arrow Functions**: These are treated as variable assignments, so only the declaration (`const` or `let`) is hoisted. The function itself is not assigned until execution reaches that line.

// ------------closure----------
// closure is the combination of fucntion bundle together with reference to its surrounding(lexical environment)

// function outer() {
//   return function () {
//     console.log("hello closure");
//   };
// }
// var a = outer();
// a();

// another example

// function outer() {
//   let a = 7;
//   function inner() {
//     console.log(a);
//   }
//   a = 100;
//   return inner;
// }
// let b = outer();
// b();

function outer(x)
{
  function inner(y)
  {
    return (x+y)
  }
  return inner
}
var b = outer(2)
console.log(b(5))
