// chapter null vs undefined

// A variable can be explicitly assigned a value of null to indicate that it has no value.
// It is an intentional assignment of "no value" to a variable.
let x = null;
console.log(x); // null

// A variable exist but has not been assigned a value yet, it is undefined
let y;
console.log(y); // undefined

function Hello () {
  

}
console.log(Hello ()); // ReferenceError: z is not defined 