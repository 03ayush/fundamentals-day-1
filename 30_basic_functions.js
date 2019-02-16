// Remember to look at documentation and ask your partners when you get stuck
// Simple math functions

const add = (a, b) => {
    return a + b;
};

const result = add(3, 4);
console.log('The result of add is: ', result);

// Use the example above to write your own functions to solve common math problems

// subtract

// multiply

// divide

// area of rectangle

// your turn!  Think of more functions on your own.


// console.log vs return
const addReturn = (a, b) => {
    return a + b;
};

const addLog = (a, b) => {
    console.log(a + b);
};

const result = addReturn(3, 4);
console.log(result);

addLog(5, 6);
const result2 = addLog(1, 7);
console.log(result2);


// Functions with strings

// Write a function that accepts a name and prints "Hello, name!"

// Write a function that accepts two strings and prints them together in a sentence.

/* 
Functions that return a boolean
Write a function that:
1. accepts a number as a parameter
2. evaluates an expression with that number
3. returns true or false based on the expression
*/

let counter = 0;
// 1. Write a function that will add 5 to the counter value each time you invoke it.

// 2. Write a function that will divide the counter value by 3 and return the remainder.

// 3. Write a function that will print the counter value in a sentence.


// 1. Write 2 functions.  Both should accept a string as a parameter.  In the first, return the string.
// In the second, console.log the string.  What do you see in the console when you invoke each one?
// Can you use a variable to catch the return value from the first function?

// Functions calling Functions

const function1 = () => {
    console.log("I");
};

const function2 = () => {
    console.log("like");
};

const function3 = () => {
    console.log("JavaScript!");
};

const allTogether = () => {
    function1();
    function2();
    function3();
};

allTogether();