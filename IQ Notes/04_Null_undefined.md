# null vs undefined in JavaScript

## undefined

- Variable is **declared but not assigned** a value
- Accessing a **non-existent** object property or array index
- Function with **no explicit return** value
- Parameter not provided when calling a function

## null

- **Intentionally assigned** by the programmer to represent "no value"
- Used to **reset or clear** a variable/object reference
- Represents an **explicit empty value**

## Key Differences

| Aspect | `undefined` | `null` |
|--------|-------------|--------|
| **typeof** | `"undefined"` | `"object"` |
| **Meaning** | Not assigned | Intentionally empty |
| **Loose equality** | `null == undefined` → `true` | |
| **Strict equality** | `null === undefined` → `false` | |
| **Default params** | Triggers default value | Does NOT trigger default |
| **JSON** | Key is omitted | Key preserved as `null` |
| **Arithmetic** | `+ 1` → `NaN` | `+ 1` → `1` |

## Quick Rules

```
undefined → JS says "I don't know this value yet"
null      → Programmer says "This value is empty on purpose"
```
