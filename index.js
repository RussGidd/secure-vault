// 1. Declare a variable named `code1`.
// 2. In a separate statement, assign `code1` to an expression that evaluates to `10`. Use the numbers `7` and `3` and an arithmetic operator.
// 3. In one statement, initialize another variable named `code2` to have a value of `40`. The `40` must be calculated using three numbers and the subtraction and division operators.
// 4. Create another variable named `code3` with a value of `39`. The `39` should be calculated using at least one remainder operator.
// 5. Initialize a variable named `message` to have the value `"The vault has been secured. The combination is:`.
// 6. Initialize a variable named `codeA` to have the value `"10-40-39"`. This value must be calculated by concatenating the variables `code1`, `code2`, and `code3`.
// 7. Initialize a variable named `codeB` to have the value `"10-40-39"`. The value must be a single [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) that uses the variables `code1`, `code2`, and `code3`.
// 8. Use `console.log` to print `message`, `codeA`, and `codeB` to the browser console.
let code1;
code1 = 7 + 3;
console.log(code1);
let code2 = 225 / 5 - 5;
console.log(code2);
let code3 = 79 % 40;
console.log(code3);
let message = "The vault has been secured. The combination is:";
console.log(message)
let codeA = code1 + "-" + code2 + "-" + code3;
console.log(codeA)
let codeB = `${code1}-${code2}-${code3}`;
console.log(codeB)
console.log(`${message} Right ${code1} - Left ${code2} - Right ${code3}`)


