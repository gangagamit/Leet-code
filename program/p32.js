// 414. Third Maximum Number
// Easy
// Topics
// Companies
// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

 

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.

var thirdMax = function(nums) {
    let Max=nums.sort((a,b)=>b-a);
    let set = new Set(Max);
    let NewArray= Array.from(set)
    if(NewArray.length<3){
        return NewArray[0]
    }
    else{
        return NewArray[2];
    }
};