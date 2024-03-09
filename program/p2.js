
// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"


{
    let num1 = "11";
    let num2 = "123";

    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    console.log(typeof(n1));
    console.log(typeof(n2));

    let n3 = n1 + n2;
    console.log(n3);

    let n4 =n3.toString();
    console.log(n4);
    console.log(typeof(n4)); 
}