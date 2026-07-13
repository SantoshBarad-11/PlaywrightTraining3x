# JavaScript Identifier Rules

## Rule 1 — Allowed Characters
Can contain **letters**, **digits**, **underscores (`_`)** , and **dollar signs (`$`)** .

```js
let myVariable = "valid";
let my_var = "valid";
let $dollar = "valid";
let _underscore = "valid";
```

## Rule 2 — Cannot Start With a Digit
```js
// let 1stVar = "invalid";  // SyntaxError
```

## Rule 3 — Cannot Use Reserved Keywords
```js
// let let = "invalid";     // SyntaxError
// let const = "invalid";   // SyntaxError
// let return = "invalid";  // SyntaxError
```

## Rule 4 — Case-Sensitive
`name` and `Name` are different identifiers.

```js
let name = "Santosh";
let Name = "Barad";
console.log(name !== Name); // true
```

## Rule 5 — Unicode Letters Are Allowed
```js
let かんじ = "Japanese";
let π = 3.14159;
let 中文 = "Chinese";
```

## Rule 6 — No Spaces or Hyphens
```js
// let my variable = "invalid";  // SyntaxError
// let my-variable = "invalid";  // SyntaxError
```

## Reserved Keywords

These **cannot** be used as identifiers:

```
let     const   var     if      else    for
while   do      function  return  class   new
this    super   typeof  instanceof  delete  try
catch   finally throw   switch  case    break
continue  default import  export  extends yield
await   async   of      in      void    debugger
with    implements  interface package private
protected public  static
```
