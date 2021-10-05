/*
Q1. Buggy Code (Part 1)
Fix the code in the code tab to pass this challenge (only syntax errors). 

*/

let a = 3;

// Specified type as number 
function cubes(a) {
	return a ** 3;
    //let cube = a * a * a;
    //return cube;
}


// compile to js means we write in language A OR B and the computer will see javascript 


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

/*
Q3. Correct the Mistakes

Fix the code in the code tab to pass this challenge (only syntax errors). 
Look at the examples below to get an idea of what the function should do.


CODE
function squaed(b) {

}
*/

function squared(b) {
// approach 1 
return b * b;
// approach 2 return b = b*b;
// approach 3 return b ** 2;
//approach 4 return Math.pow(b, 2);

}

/*
Q4. Return the Last Element in an Array
Create a function that takes an array containing only numbers and return the Last element.

CODE
function getLastValue(arr) {
	
}
*/

function getLastValue(arr) {
	return arr[arr.length - 1];
}


/*
Q4. Return the Sum of an Array
Create a function that takes an array containing only numbers and return the sum of the array.

CODE
function getFirstValue(arr) {
	
}
*/


function sumArray(arr) {
	return sum = arr.reduce((a, b) => a + b, 0);
}

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


/*
Q5. Convert Age to Days
Create a function that takes the age in years and returns the age in days.

CODE
function calcAge(age) {
	
}
*/


function calcAge(age) {
	return age * 365;
}


/*
Q6. Pair Management
Given two arguments, return an array which contains these two arguments.

Examples
makePair(1, 2) ➞ [1, 2]

CODE
function makePair(num1, num2) {
	
}
*/



function makePair(num1, num2) {
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

function getVoteCount(parr) {
	return parr.upvotes - parr.downvotes;
}


function Musician(name, yearsPlaying, hourlyRate){

	var musicianType = '';
	
	this.getArtistName = () => {
		return name;
	}
	
	this.getHourlyRate = () => {
		return hourlyRate;
	}
	
	this.musSummary = () =>{
		return `My name is ${name}, and I play the ${musicianType}\n `;
	}
	
	//musician details
	this.musDetail = () =>{
		return `Hello my name is ${name}.\n
				I have been playing for ${yearsPlaying},\n
				My Hourly rate is ${hourlyRate},\n
				I also am a ${musicianType}\n`
	}
	
	//Setting the musician type i.e guitarist, basist etc..
	this.setMusicianType = (type) =>{
		musicianType = typeof(type) == 'string' ? type : 'Instrumentalist';
	}
	
	
	
	}



module.exports = { cubes, makePair, calcAge, getFirstValue, getLastValue, sumArray, squared, nameString, Musician };






















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


