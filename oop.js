// const person = {
//     name: "Sahil Shrestha",
//     age: 20,
//     isEmployed: "Not",
//     Skills: ["java", "javscript", "python", ["Css", "tailwind"]],
//     address: {
//       city: "itahari",
//       tole: "baraha",
//     },

// Arrow function
//     hobbie: () => {
//       // `this` doesn't work as expected in arrow functions, because `this` refers to the surrounding scope (not the object)
//       return `this is not working in arrow function`;
//     },

//     // Regular method function
//     bio() {
//       // In regular methods, `this` refers to the object itself
//       return `I am ${this.name}. Lives in ${this.address.city}`;
//     },
//   };

//   console.log(person.bio());    // Works correctly because `this` refers to `person`
//   console.log(person.hobbie()); // Doesn't work as expected because arrow function doesn't bind `this` to `person`
// console.log("2"/"2")

// -----------Factory function---------
// A factory function in JavaScript is a function that returns an object.
// Factory functions allow you to create multiple instances of an object with the same structure, but with potentially different properties or methods.
function person(name, age) {
  return {
    name, // shorthand for name: name (same variable name, so we can write just `name`)
    age, // shorthand for age: age
    isEmployed: "Not",
    Skills: ["java", "javscript", "python", ["Css", "tailwind"]],
    address: {
      city: "itahari",
      tole: "baraha",
    },
    bio() {
      // method to return a string
      return `I am ${this.name}. And my age is ${this.age}`; // `this` refers to the object created
    },
  };
}
// console.log(typeof person)
// const SahilObj = person("Sahil", 20);
// console.log(SahilObj.bio());

const barshaObj = person("barsha", 24);
console.log(barshaObj.bio());

// ------contsructor function---------
// A constructor function is a special type of function in JavaScript used to create objects.
// When a function is used as a constructor, it is called with the "new" keyword to initialize
// a new object, where "this" points to the newly created object.

// example

function PersonData(name, address) {
  // "this" refers to the new empty object created by "new"
  // Assign properties to the object
  (this.name = name), 
  (this.address = address);
  // No need to return the object explicitly; "new" handles that automatically
}
// Usage of Constructor Function with "new" keyword
// When we use "new", JavaScript:
// 1. Creates an empty object.
// 2. Sets "this" to refer to that object within the constructor function.
// 3. Returns "this" (the new object) automatically at the end.


const  SahilObj = new PersonData("sahil","itahari")
console.log(typeof SahilObj)
console.log(SahilObj)
