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
      age,  // shorthand for age: age
      isEmployed: "Not",
      Skills: ["java", "javscript", "python", ["Css", "tailwind"]],
      address: {
        city: "itahari",
        tole: "baraha",
      },
      bio() { // method to return a string
        return `I am ${this.name}. And my age is ${this.age}`; // `this` refers to the object created
      },
    };
  }
  
  const SahilObj = person("Sahil", 20); 
  console.log(SahilObj.bio()); 
  
  const barshaObj = person("barsha", 24); 
  console.log(barshaObj.bio()); 
  