
// Code
// Testcase
// Testcase
// Test Result
// 231. Power of Two
// Easy
// Topics
// Companies
// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.
// Example 1:
// Input: n = 1
// Output: true
// Explanation: 20 = 1
var isPowerOfTwo = function(n) {
    for(let i = 0; i <20; i++){
     let x = Math.pow(2,i);
     if(x==n){
         return true;
     }
     else{
         return false;
     }
    }
 };