// 1281. Subtract the Product and Sum of Digits of an Integer
// Easy
// Topics
// Companies
// Hint
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

var subtractProductAndSum = function(n) {
    n=n.toString();
    let output;
    let sum=0;
    let product=1;
   for(let i =0; i<n.length; i++){
    sum +=parseInt(n[i]);
    product*=parseInt(n[i]);
   }
   return output= product-sum;
};