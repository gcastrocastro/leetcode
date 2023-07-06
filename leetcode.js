// 744. Find Smallest Letter Greater Than Target

/* You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.*/

/* Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.*/

/*Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.*/

/*Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].*/

/* Answer Below */

// input: an array of letters sorted in non-decreasing order, a letter target
// output: smallest character that's greater than target, if none, return first letter in array


const nextGreatestLetter = function(letters, target) {
    const targetFound = letters.findIndex(i => i === target)
    if (targetFound >= 0){
        return letters[targetFound + 1];  
    } else {
        return letters[0];
    }
}

//option 2 using a set
const nextGreatestLetter1 = function(letters, target){
    let set = new Set(letters);
    for (let i of set){
        if (target < i)
            return console.log(i);
    } return console.log(letters[0]);
}

// nextGreatestLetter1(["c","f","j"], "c");
// nextGreatestLetter1(["c","f","j"], "c");
// nextGreatestLetter1(["x","x","y","y"], "z");

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//746. Min Cost Climbing Stairs

/*You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.*/

/*Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.*/

/*Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.*/

/* Answer Below */

// input: array where each item represents a cost and the length + 1 = # of total steps to reach top
// output: minimum cost needed to reach top

const minCostClimbingStairs = function(cost){
    let startingPointOne = cost[0];
    let startingPointTwo = cost[1];

    for (let i = 2; i < cost.length ; i++){
        let currentCost = cost[i] + Math.min(startingPointOne, startingPointTwo);
        startingPointOne = startingPointTwo;
        startingPointTwo = currentCost;
    }
    return console.log(Math.min(startingPointOne, startingPointTwo));
}

// minCostClimbingStairs([10,15,20]);
// minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//1838. Frequency of the Most Frequent Element

/*The frequency of an element is the number of times it occurs in an array.

You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.

Return the maximum possible frequency of an element after performing at most k operations.*/

/*Input: nums = [1,2,4], k = 5
Output: 3
Explanation: Increment the first element three times and the second element two times to make nums = [4,4,4].
4 has a frequency of 3.*/

/*Input: nums = [1,4,8,13], k = 5
Output: 2
Explanation: There are multiple optimal solutions:
- Increment the first element three times to make nums = [4,4,8,13]. 4 has a frequency of 2.
- Increment the second element four times to make nums = [1,8,8,13]. 8 has a frequency of 2.
- Increment the third element five times to make nums = [1,4,13,13]. 13 has a frequency of 2.*/

/*Input: nums = [3,9,6], k = 2
Output: 1*/

/* Answer Below */

//input: an array of numbers and an int which equals the number of max amount you can add 
//output: the max frequency of an integer after adding the k amount to each 

//my attempt -- not finished
const maxFrequency = function (nums, k) {
    const sorted = nums.sort((a, b) => a-b);
    const length = sorted.length;
    let remainingAmount = k

    while (remainingAmount > 0){
        for (let i=0; i < length; i++){
            let difference = sorted[length-1] - sorted[i]
            console.log('dif', difference)
            if (difference > 0){
                // console.log('everytime', remainingAmount)
                sorted[i]++;
                remainingAmount--;
                console.log(sorted)
            } else {
                i++
            }
        }
    }
}

//option 2

const maxFrequency1 = function(nums, k) {
    nums.sort((a, b) => a - b);
    const length = nums.length;
    let left = 0;
    let maxFreq = 1;
    let operations = k;

    for (let right = 1; right < length; right++) {
        operations -= (nums[right] - nums[right - 1]) * (right - left);

        while (operations < 0) {
            operations += nums[right] - nums[left];
            left++;
        }

        maxFreq = Math.max(maxFreq, right - left + 1);
    }

    return console.log(maxFreq);
};

maxFrequency1([1,2,4], 5);
maxFrequency1([1,4,8,13], 5);
maxFrequency1([3,9,6], 2);


/**/
/**/
/**/