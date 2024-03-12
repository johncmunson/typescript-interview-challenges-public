// ██████╗     ██╗    ██████╗     ███████╗     ██████╗    ████████╗    ██╗     ██████╗     ███╗   ██╗    ███████╗
// ██╔══██╗    ██║    ██╔══██╗    ██╔════╝    ██╔════╝    ╚══██╔══╝    ██║    ██╔═══██╗    ████╗  ██║    ██╔════╝
// ██║  ██║    ██║    ██████╔╝    █████╗      ██║            ██║       ██║    ██║   ██║    ██╔██╗ ██║    ███████╗
// ██║  ██║    ██║    ██╔══██╗    ██╔══╝      ██║            ██║       ██║    ██║   ██║    ██║╚██╗██║    ╚════██║
// ██████╔╝    ██║    ██║  ██║    ███████╗    ╚██████╗       ██║       ██║    ╚██████╔╝    ██║ ╚████║    ███████║
// ╚═════╝     ╚═╝    ╚═╝  ╚═╝    ╚══════╝     ╚═════╝       ╚═╝       ╚═╝     ╚═════╝     ╚═╝  ╚═══╝    ╚══════╝
//
//
//    *** Your goal is to get as many tests in `index.test.ts` to pass as possible
//
//    *** Get the tests to pass by filling out the functions below
//
//    *** You are encouraged to brainstorm with the other developers in the room
//
//    *** Using Google is allowed, but please refrain from searching for the direct answers
//
//    *** NO CHATGPT! (or Github Copilot, or any other AI/ML model that writes code for you)
//
//    *** Workflow:
//          1. Open the terminal and run `npm run test:watch`
//          2. Uncomment the `describe` block for the function you are working on
//          3. Get the types / function signature correct so that the tests will run
//          4. Fill out the function body so that the tests pass
//          5. Move on to the next function
//
//
// █████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗
// ╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝

// 0. FREEBIE: Write a function called `add` that returns the sum of two numbers
export const add = (a: number, b: number) => {
  return a + b
}

// 1. Write a function called `compact` that removes all falsy values from an array
export const compact = () => {}

// 2. Write a function called `sumValues` to calculate the sum of all the number in an array
export const sumValues = () => {}

// 3. Write a function called `addOrRemove` that adds an item to an array if it doesn't already exist, and removes it if not.
//    The array can contain primitive data types, but not objects or arrays.
export const addOrRemove = () => {}

// 4. Write a function called `chunk` that accepts an array and splits it into groups of length `size`. If the array can't be
//    split evenly, the final chunk will be the remaining elements.
export const chunk = () => {}

// 5. Write a function called `arrayDifference` that returns all the values from the first array that are not present in any
//    of the other provided arrays
export const arrayDifference = () => {}

// 6. Write a function called `isPalindrome` that returns true if a string is a palindrome, and false otherwise
export const isPalindrome = () => {}

// 7. Write a function called `getAllKeys` that returns all the keys of a nested object
export const getAllKeys = () => {}

// 8. Write a class called `Calculator` with the following requirements...
//      - may optionally be initialized with a starting value, otherwise it starts with zero in the register
//      - has the ability to add, subtract, multiply, and divide
//      - calculations may be chained together (fluent API)
//      - the register can be reset to zero using a `clear` method
//      - returns the calculated result when `calculate` is called
//    Example:
//      const myCalc = new Calculator(3)
//      const result = myCalc.add(2).multiply(10).calculate()
//      console.log(result) //=> 50
export class Calculator {}

// 9. Write a function called `sleep` that awaits a given number of milliseconds before resolving
export const sleep = () => {}

// 10. Write a function called `memoize` that memoizes a function that accepts a variable number of arguments and returns it.
export const memoize = () => {}
