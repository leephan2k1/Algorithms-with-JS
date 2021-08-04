//Test cases:
// getMaxSubSum([-1, 2, 3, -9]) == 5 
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (take all)
// [-1] => -1
// [-2,-1,-5,-4] => -1

// Approach: Kadane Algorithm O(n) leetcode Passed 
function getMaxSubSum(arr){
    let prev = 0; // save a prev value
    let max = -1/0; // the result we need!
    for (let i = 0; i < arr.length; i++) {
      prev = Math.max(prev + arr[i], arr[i]); 
      max = Math.max(max, prev); 
    }
    return max;
}
console.log(getMaxSubSum([-2, -1, 1, 2]));