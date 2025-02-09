# React Native TypeError: Cannot read properties of null (reading '...')

This repository demonstrates a common error in React Native: `TypeError: Cannot read properties of null (reading '...')`.  This error occurs when attempting to access a property of a null or undefined object. This is frequently caused by asynchronous data fetching or missing navigation parameters.

The `bug.js` file showcases the error, and `bugSolution.js` provides a solution using optional chaining and nullish coalescing.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run the application.
4. Observe the error in the console.

## Solution

The provided solution utilizes optional chaining (`?.`) and the nullish coalescing operator (`??`) to gracefully handle cases where the object or its property might be null or undefined.