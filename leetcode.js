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

// maxFrequency1([1,2,4], 5);
// maxFrequency1([1,4,8,13], 5);
// maxFrequency1([3,9,6], 2);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/* 1839. Longest Substring Of All Vowels in Order */

/* A string is considered beautiful if it satisfies the following conditions:

Each of the 5 English vowels ('a', 'e', 'i', 'o', 'u') must appear at least once in it.
The letters must be sorted in alphabetical order (i.e. all 'a's before 'e's, all 'e's before 'i's, etc.).
For example, strings "aeiou" and "aaaaaaeiiiioou" are considered beautiful, but "uaeio", "aeoiu", and "aaaeeeooo" are not beautiful.

Given a string word consisting of English vowels, return the length of the longest beautiful substring of word. If no such substring exists, return 0.

A substring is a contiguous sequence of characters in a string. */

/* Input: word = "aeiaaioaaaaeiiiiouuuooaauuaeiu"
Output: 13
Explanation: The longest beautiful substring in word is "aaaaeiiiiouuu" of length 13. */

/* Input: word = "aeeeiiiioooauuuaeiou"
Output: 5
Explanation: The longest beautiful substring in word is "aeiou" of length 5. */

/* Input: word = "a"
Output: 0
Explanation: There is no beautiful substring, so return 0. */

/* Answer Below */

// input: a string
// output: an integer

function longestBeautifulSubstring(word) {
    let currentWord = '';
    vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i of word){
        for (let v of vowels){
            if (!word.includes(v)) return console.log(0);
            if (i === v){
                currentWord += v;
            } else {
                break;
            }
        }
    }
    return console.log(currentWord);
}

longestBeautifulSubstring("aeiaaioaaaaeiiiiouuuooaauuaeiu");
// longestBeautifulSubstring("aeeeiiiioooauuuaeiou");
// longestBeautifulSubstring("a");

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/* 1844. Replace All Digits with Characters */

/* You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'. */

/* Input: s = "a1c1e1"
Output: "abcdef"
Explanation: The digits are replaced as follows:
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('c',1) = 'd'
- s[5] -> shift('e',1) = 'f' */

/* Input: s = "a1b2c3d4e"
Output: "abbdcfdhe"
Explanation: The digits are replaced as follows:
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('b',2) = 'd'
- s[5] -> shift('c',3) = 'f'
- s[7] -> shift('d',4) = 'h' */

/* Answer Below */

// input: a string
// output: a string

function replaceDigits(str) {
    
}

replaceDigits("a1c1e1");
replaceDigits("a1b2c3d4e");


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/* 1869. Longer Contiguous Segments of Ones than Zeros */

/* Given a binary string s, return true if the longest contiguous segment of 1's is strictly longer than the longest contiguous segment of 0's in s, or return false otherwise.

For example, in s = "110100010" the longest continuous segment of 1s has length 2, and the longest continuous segment of 0s has length 3.
Note that if there are no 0's, then the longest continuous segment of 0's is considered to have a length 0. The same applies if there is no 1's. */

/* Input: s = "1101"
Output: true
Explanation:
The longest contiguous segment of 1s has length 2: "1101"
The longest contiguous segment of 0s has length 1: "1101"
The segment of 1s is longer, so return true. */

/* Input: s = "111000"
Output: false
Explanation:
The longest contiguous segment of 1s has length 3: "111000"
The longest contiguous segment of 0s has length 3: "111000"
The segment of 1s is not longer, so return false. */

/* Input: s = "110100010"
Output: false
Explanation:
The longest contiguous segment of 1s has length 2: "110100010"
The longest contiguous segment of 0s has length 3: "110100010"
The segment of 1s is not longer, so return false. */

/* Answer Below */

// input: a string
// output: a string

function checkZeroOnes(str) {
    
}

checkZeroOnes("1101");
checkZeroOnes("111000");
checkZeroOnes("110100010");

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/* 290. Word Pattern */

/* Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. */

/* Input: pattern = "abba", s = "dog cat cat dog"
Output: true */

/* Input: pattern = "abba", s = "dog cat cat fish"
Output: false */

/* Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false */

/* Answer Below */

// input: two strings
// output: a boolean

function wordPattern(pattern, s) {
    
}

wordPattern("abba", "dog cat cat dog");
wordPattern("abba", "dog cat cat fish");
wordPattern("aaaa", "dog cat cat dog");




/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/