// Execution Context:
// The execution context defines how data (variables, functions, and objects)
// is accessed and used during the execution of code. Each function call creates
// a new execution context, with its own scope and variable definitions.

var globalValue = "sahil"; // Declares a global variable 'globalValue' and initializes it with "sahil"

// The global execution context is created when the script is loaded, setting up the global scope,
// which includes 'globalValue' as a variable accessible anywhere within the script.

// Function Declaration: 'Name'
function Name() {
  // 'Name' function creates a new function execution context when called.
  // In this context, it has access to all global variables, including 'globalValue'.

  console.log(globalValue); // Logs "sahil" to the console
  // 'globalValue' is not defined locally within the function, so JavaScript looks
  // in the outer (global) scope and finds 'globalValue' with the value "sahil".

  document.getElementById("demo").innerHTML = globalValue;
  // Sets the innerHTML of the element with ID 'demo' to "sahil" (the value of 'globalValue' in global scope)
}

// Calling the 'Name' function
Name(); // Executes the function 'Name', logging "sahil" and updating the element content

// Function Declaration: 'anotherName'
function anotherName() {
  // When 'anotherName' is called, a new execution context is created for this function.
  // In this context, a new local variable 'globalValue' is declared.

  var globalValue = "barsha"; // Declares a local variable 'globalValue' with value "barsha"
  // This 'globalValue' is limited to the 'anotherName' function and does not affect the global 'globalValue'

  console.log(globalValue); // Logs "barsha" to the console
  // Here, 'globalValue' refers to the local variable within 'anotherName', not the global one.
}

// Calling the 'anotherName' function
anotherName(); // Executes the function 'anotherName', logging "barsha"

// --------------lexical environment------------
//lexical :-  lexical refers to how code is organized based on its structure and order

// lexical environment : refers to local memory along with its lexical enviroment of the parent

// ******Example******

function OuterSpace() {
  let b = 10;
  function innerSpace() {
    let c = 20;
    console.log(c); // access the data from the local memory
    console.log(b); // tries to access  the data  from the local memory, then go to the lexical enviroment of outerspace
  }
  return innerSpace();
}
const output = OuterSpace();
output;
