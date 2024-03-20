// You are given an integer num. You can swap two digits at most once to get the maximum valued number.

// Return the maximum valued number you can get.

 

// Example 1:

// Input: num = 2736
// Output: 7236
// Explanation: Swap the number 2 and the number 7.



var maximumSwap = function(num) {
    num = num.toString().split('')
arr = []
for (i = 0; i < num.length; i++) {
    num[i] = parseInt(num[i])
    arr.push(num[i])
}
arr.sort(function (a, b) { return b - a })
for (i = 0; i < arr.length; i++) {
    if (num[i] !== arr[i]) {
        temp = num[i]
        num[i] = arr[i]
        num[num.lastIndexOf(arr[i])] = temp
        break
    }
}
return parseInt(num.join(''))

};


// let max=[7];
// let num = [2,7,3,6];
// let j = num.sort();
// console.log(j);
// j.unshift(7);
// j.pop();
// console.log(j);
//  function Max(){

//      function myArrayMax(arr){
//          console.log(Math.max.apply(null,arr));
//      } 
//      const num1 = [2,7,3,6];
//      console.log(num1);
//      myArrayMax(num1);
//  }
//  Max();


// const num = [2,7,3,6];
// let num1 = num.toString();
// console.log(num1);






// let swap = ()=>{
//     for(i = 0; i<=num.length-1;i++){
//         if(j==max)
//         {
//             let a = [0];
//             let b = [1];
            
//             console.log(max);
            
//         }
//         else{
//             xonsole.log(num);
//         }
//     }
// };