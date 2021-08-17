/*
Q1. Buggy Code (Part 1)
Fix the code in the code tab to pass this challenge (only syntax errors). 

cubes(3) ➞ 27

cubes(5) ➞ 125

cubes(10) ➞ 1000

CODE
function cubes(a) {
	
}
*/
let a = 3;


function cubes(a) {
	return a ** 3;
    //let cube = a * a * a;
    //return cube;
}



let result = cubes(a);

console.log("Question 1 Result: " + result);

/*
Q2. Basic Variable Assignment
A student learning JavaScript was trying to make a function.
His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. 
He needs your help to fix this code.

CODE
function nameString(name){
	
}
*/

function nameString(name){

	var result = name + "Edabit";
    return result;
}

console.log("Question 2 Result: " + nameString("Jordan"));


/*
Q3. Correct the Mistakes

Fix the code in the code tab to pass this challenge (only syntax errors). 
Look at the examples below to get an idea of what the function should do.

Examples
squared(5) ➞ 25

squared(9) ➞ 81

squared(100) ➞ 10000

CODE
function squaed(b) {

}
*/

function squaed(b) {
// approach 1 
return b * b;
// approach 2 return b = b*b;
// approach 3 return b ** 2;
//approach 4 return Math.pow(b, 2);

}

console.log("Question 3 Result: " + squaed(5));


/*
Q4. Return the First Element in an Array
Create a function that takes an array containing only numbers and return the first element.

CODE
function getFirstValue(arr) {
	
}
*/



function getFirstValue(arr) {
    return arr[0];
	
}
let array = [10, 15, 12, 3];

console.log("Question 4 Result: " + getFirstValue(array));

// Inside of function... always work with the parameters

// Outside of function, ALWAYS PASS YOUR PARAMETER



/*
Q5. Convert Age to Days
Create a function that takes the age in years and returns the age in days.

CODE
function calcAge(age) {
	
}
*/

let userAge = 30; 

function calcAge(age) {
	return age * 365;
}

console.log("Question 5 Result is: " + calcAge(userAge));


/*
Q6. Pair Management
Given two arguments, return an array which contains these two arguments.

Examples
makePair(1, 2) ➞ [1, 2]

CODE
function makePair(num1, num2) {
	
}
*/

// Arguments
// Parameter 


function makePair(num1, num2, num, nn, bs, g, g, ee, ww, ee, jj, ff, cc,) {
	return [num1, num2];
    //return [...arguments];
}



/*
Q7. Upvotes vs Downvotes
Given an object containing counts of both upvotes and downvotes, 
return what vote count should be displayed. 
This is calculated by subtracting the number of downvotes from upvotes.

Examples
getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

CODE
function getVoteCount(votes) {
	
}
*/

let abc = 22;

let votes = {
    upvotes: 22,
    downvotes: 23,
}

let newVotes = {
    upvotes: 44,
    downvotes: 33
}

// To Acces Values in an object, we use the ObjectName . ValueName

let upvote = votes.upvotes;

console.log("Upvotes : " + upvote);

function getVoteCount(parr) {
	return parr.upvotes - parr.downvotes;
}

console.log("Question & Result is: " + getVoteCount(votes));





























/*
Q8. BONUS QUESTION

Function pow(x,n)

Write a function pow(x,n) that returns x in power n. 
Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

CODE
function pow(x,n){

}
*/