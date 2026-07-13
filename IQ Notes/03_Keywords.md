# JavaScript Keywords

## What are Keywords?

Keywords are **reserved words** in JavaScript that have special meaning to the language. They are part of JavaScript's syntax and **cannot be used as identifiers** (variable names, function names, class names, etc.). They tell the JavaScript engine to perform specific actions.

---

## All JavaScript Keywords

### 1. Control Flow & Conditionals

| Keyword  | Purpose |
|----------|---------|
| `if`     | Executes a block if a condition is truthy |
| `else`   | Executes a block if the `if` condition is falsy |
| `switch` | Evaluates an expression and matches its value to `case` labels |
| `case`   | A branch inside a `switch` statement |
| `break`  | Exits a loop or `switch` statement |
| `continue` | Skips the rest of the current loop iteration and moves to the next |
| `default` | The fallback branch in a `switch` statement |

### 2. Loops (Iteration)

| Keyword | Purpose |
|---------|---------|
| `for` | Creates a loop with init, condition, and increment |
| `while` | Loops while a condition is truthy |
| `do` | Runs a block once, then loops while a condition is truthy |
| `in` | Iterates over **enumerable property names** of an object (`for...in`) |
| `of` | Iterates over **iterable values** (`for...of`) |

### 3. Variable Declaration

| Keyword  | Purpose |
|----------|---------|
| `var`    | Declares a function-scoped or globally-scoped variable (older style) |
| `let`    | Declares a block-scoped local variable (ES6+) |
| `const`  | Declares a block-scoped constant that can't be reassigned (ES6+) |

### 4. Functions & Scope

| Keyword     | Purpose |
|-------------|---------|
| `function`  | Declares a function |
| `return`    | Exits a function and returns a value |
| `arguments` | An array-like object accessible inside functions (not a reserved word in all contexts but has special meaning) |
| `this`      | Refers to the execution context (global object, object instance, etc.) |
| `yield`     | Pauses/resumes a generator function |
| `async`     | Declares an asynchronous function (ES2017) |
| `await`     | Pauses async function execution until a Promise settles (ES2017) |
| `void`      | Evaluates an expression and returns `undefined` |
| `get`       | Binds an object property to a function (getter) |
| `set`       | Binds an object property to a function (setter) |

### 5. Object & Class

| Keyword     | Purpose |
|-------------|---------|
| `class`     | Declares a class (ES6) |
| `extends`   | Creates a class that inherits from another class |
| `super`     | Refers to the parent class (call parent constructor/methods) |
| `new`       | Creates an instance of a user-defined object or built-in constructor |
| `this`      | Refers to the current instance in a class context |
| `static`    | Defines static methods/properties on a class |
| `constructor` | Special method for creating/initializing an object in a class |
| `new.target`  | Detects if a function/constructor was called with `new` |

### 6. Error Handling

| Keyword   | Purpose |
|-----------|---------|
| `try`     | Defines a block of code to test for errors |
| `catch`   | Defines a block to handle errors from `try` |
| `finally` | Defines a block that runs regardless of error or not |
| `throw`   | Throws a user-defined exception |

### 7. Module System (ES Modules)

| Keyword   | Purpose |
|-----------|---------|
| `import`  | Imports bindings from another module |
| `export`  | Exports bindings from the current module |
| `from`    | Specifies the module path in an `import` statement |
| `as`      | Creates an alias when importing/exporting |
| `default` | Exports a default value from a module |

### 8. Type System

| Keyword   | Purpose |
|-----------|---------|
| `typeof`  | Returns a string describing the type of a value |
| `instanceof` | Tests if an object is an instance of a constructor/prototype |
| `undefined` | Represents an uninitialized or missing value |
| `null`    | Represents an intentional absence of any object value |
| `true`    | Boolean `true` literal |
| `false`   | Boolean `false` literal |
| `Infinity` | Represents mathematical infinity |
| `NaN`     | Represents "Not-a-Number" |

> **Note:** `Infinity` and `NaN` are **global properties**, not keywords. They are included here because they are commonly grouped with language fundamentals.

### 9. Object Operations

| Keyword | Purpose |
|---------|---------|
| `delete` | Deletes a property from an object |
| `in`     | Returns `true` if a property exists in an object |
| `instanceof` | Tests prototype chain membership |

### 10. Debugging

| Keyword     | Purpose |
|-------------|---------|
| `debugger`  | Invokes any available debugging functionality (creates a breakpoint) |

### 11. Meta & Special

| Keyword   | Purpose |
|-----------|---------|
| `target`  | Used in `import.meta` and `new.target` contexts |
| `meta`    | Used in `import.meta` (provides module metadata) |

---

## Reserved Words (Future Use)

These words are reserved by JavaScript for potential future use and cannot be used as identifiers:

```
enum, implements, interface, let, package, private, protected, public, static
```

> `let` and `static` are now actually used (ES6+), but they remain reserved.

---

## Quick Reference — Complete List

```
async    await    break    case     catch    class    const    continue
debugger default delete  do       else     export   extends  finally
for      function if      import   in       instanceof let     new
of       return   static  super    switch   this     throw    try
typeof   var      void    while    with     yield

Values:   true     false    null     undefined
```

---

## Key Rule

**Keywords cannot be used as variable/function/class names.**

```js
let if = 5;       // ❌ SyntaxError
const return = 10; // ❌ SyntaxError
var true = false;   // ❌ SyntaxError
```

However, some reserved words like `undefined`, `NaN`, `Infinity` are **not strictly reserved** — they are global properties. You **can** technically use them as variable names (but **don't** — it's terrible practice).

```js
let undefined = 5;   // ⚠️ Works but don't do this
let NaN = "hello";   // ⚠️ Works but terrible idea
```
