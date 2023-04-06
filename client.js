/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */
let hobbies = ['fishing', 'hiking', 'skating', 'grilling'];
const list = document.getElementById("hobby-list");

for (hobby of hobbies) {
    list.innerHTML += `<li>${hobby}</li>`;
    console.log(hobby);
}



// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */


// Example output
// green, red, teal, orange, teal
// Teal was found 2 times

let colorArray = ['green', 'red', 'teal', 'orange', 'teal'];
let tealCount = 0;
for (color of colorArray) {
    if (color === 'teal') {
        tealCount += 1;
    }
}
console.log(colorArray);
console.log(`Teal was found ${tealCount} times`)


/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */


// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2

let numArray = ['1', '7', '4', '3', '10'];
let evenNumbers  =[];
let oddNumbers = [];

for (num of numArray) {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    } else {
        oddNumbers.push(num);
    }
}

console.log(numArray);
console.log(`Odd ${oddNumbers}`);
console.log(`Even ${evenNumbers}`);

/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */


// Example output
// true, false, true, true
// Toggled false, true, false, false

let bool = [true, true, false, false];
let toggled = []
for (i of bool) {
    if (i) {
        toggled.push(false);
    } else {
        toggled.push(true);
    }
}

console.log(`bool: ${bool}\ntoggled: ${toggled}`);


/**
 * #5 Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 */


// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8

let nonZeroFlag = false;
let nums = [1,6,0,7,5,3,0,0,0,0,6,0];

for (let j = nums.length - 1; j >= 0; j-- ) {
    if (nums[j] === 0) {
        nums.pop();
    } else {
        break;
    }
}
console.log(nums);

/*
 * 1. Create a largish array full of numbers, including at least two different numbers 
 * that repeat (Example: [0, 2, 1, 2, 4, 1])
 * 2. Find the "greatest position distance" between repeating numbers in your array.
 * Example: In an array with the values [0, 2, 1, 2, 4, 1] the greatest position distance is 
 * between the matching '1' values at index 2 and 5. 
 * 
 * Executing greatestDistance against this array would return 3. (i.e. 5 - 2)
 */

let newNums = [0, 2, 1, 2, 4, 7, 6, 0];

let maxDist = 0; // want to set this equal to the largest distance
let currDist = 0; // this will be the current distance between the compared indices
let posCounter = 0; // want this to be every index but the current index

// create a loop to iterate over every index in the array
for (x in newNums) {

    //create a loop to iterate over every checking index (not including the current index)
    for (posCounter = 0; posCounter < newNums.length; posCounter++) {

        // ensure we aren't comparing the same index
        if(x == posCounter) {
            continue;
        // if there is a match between the starting index and the checking index, set currDist to the absolute value
        // of the difference between the two indeces
        } else {
            if (newNums[x] === newNums[posCounter]) {
                currDist = Math.abs(x - posCounter);
                // if the currDist is greater than maxDist, set maxDist = currDist
                if (currDist > maxDist) {
                    maxDist = currDist;
                }
            }
        }
    }
}
console.log(`The max distance is: ${maxDist}`);