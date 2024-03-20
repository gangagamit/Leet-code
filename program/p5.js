// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].


// var plusOne = function(digits) {
//     for(let i = digits.length-1; i>=0; i--){
//       if(digits[i]<9)
//       {
//           digits[i] = digits[i]+1;
//           return digits;
//       }
//       else
//       {
//           digits[i] = 0;
//       }
//     }  
//     digits.unshift(1);
//     return digits;
//   };