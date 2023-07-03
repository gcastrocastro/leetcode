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

}

minCostClimbingStairs([10,15,20]);
minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]);

/**/
/**/