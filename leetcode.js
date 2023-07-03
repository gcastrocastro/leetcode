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

nextGreatestLetter1(["c","f","j"], "c");
nextGreatestLetter1(["c","f","j"], "c");
nextGreatestLetter1(["x","x","y","y"], "z");