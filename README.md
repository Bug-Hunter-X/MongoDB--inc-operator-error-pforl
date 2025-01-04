# MongoDB $inc operator error
This repository contains a demonstration of an uncommon error that can occur when using the `$inc` operator in MongoDB update queries.  The error arises from providing a non-numeric value to the `$inc` operator, resulting in an error. The solution involves type checking and conversion to ensure the value is a number before using `$inc`.

## Bug
The provided `bug.js` demonstrates incorrect usage of the `$inc` operator where a string value is passed.  This leads to an error.

## Solution
The corrected code in `bugSolution.js` showcases how to safely use the `$inc` operator by converting the value to a number using `parseInt()` before updating the document.  This prevents unexpected errors.  This is especially important when values are coming from user input or external sources.