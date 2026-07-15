// comparion operators are used to compare two values and return a boolean value (true or false) based on the comparison.

//= ,== and === operators are used to compare values for equality. The == operator checks for equality of values, while the === operator checks for equality of both values and types.
// == is loose check
// === is strict check
// > < >= <=

// console .log (5 == '5'); // true, because the values are equal (loose check)
// console .log (6 === '6'); // true, because the values and types are equal    (strict check)

console.log (5 > "5"); // true, because 5 is greater than 3


// // null vs undefined
// console.log (null == undefined); // true, because both are considered equal in loose comparison
// console.log (null === undefined); // false, because they are of different types in strict comparison    
// console.log (null > 0); // false, because null is considered less than any number
// console.log (null == 0); // false, because null is not equal to 0 in loose comparison
// console.log (null >= 0); // true, because null is considered equal to 0 in loose comparison

console.log (null == 0) || (null < 0); // true, because both are considered equal in loose comparison
console.log (null < 0); // false, because null is considered less than any number