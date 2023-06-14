// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

//My Solution
function sumStr(num1, num2) {
    try {
      const parsedNum1 = num1 !== "" ? parseInt(num1) : 0;
      const parsedNum2 = num2 !== "" ? parseInt(num2) : 0;
      const result = (parsedNum1 + parsedNum2).toString();
      return result;
    } catch (error) {
      return "Invalid input. Please enter valid integers.";
    }
  }