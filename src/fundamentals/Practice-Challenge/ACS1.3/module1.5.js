/*
Q1. Is the Number Less than or Equal to Zero?
Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

Examples
lessThanOrEqualToZero(5) ➞ false

lessThanOrEqualToZero(0) ➞ true

lessThanOrEqualToZero(-2) ➞ true

CODE
function lessThanOrEqualToZero(num) {
	
}
*/

var value = -1;

function lessThanOrEqualToZero(num) {
	
    
    if(num <= 0){
        return true;
    }
    else if(num > 0) {
        return false;
    }
    
   //return num <= 0;

}

var value = lessThanOrEqualToZero(10);

console.log("Question 1 Result: " + value);




/*
Q2. Are the Numbers Equal?
Create a function that returns true when num1 is equal to num2; otherwise return false.

Examples
isSameNum(4, 8) ➞ false

isSameNum(2, 2) ➞  true

isSameNum(2, "2") ➞ false

CODE
function isSameNum(num1, num2) {
	
}
*/

function isSameNum(num1, num2) {

    //return num1 === num2;
   
	if(num1 === num2){
        return true;
    }
    else if(num1 !== num2){
        return false;
    }
    
}

let a = 5;
let b = 5; 

console.log("Question 2 Result: " + isSameNum(a,b));


/*
Q3. Profitable Gamble
Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

To illustrate:

profitableGamble(0.2, 50, 9)
... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

Examples
profitableGamble(0.2, 50, 9) ➞ true

profitableGamble(0.9, 1, 2) ➞ false

profitableGamble(0.9, 3, 2) ➞ true

CODE
function profitableGamble(prob, prize, pay) {
	
}
*/

function profitableGamble(prob, prize, pay) {
	//return (prob * prize) > pay;

    if((prob * prize )> pay){
        return true;
    }
    return false;
    
}

console.log("Question 3 Result: " + profitableGamble(0.2,50,9));


/*
Q4. Buggy Code (Part 2)
Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

Examples
maxNum(3, 7) ➞ 7

maxNum(-1, 0) ➞ 0

maxNum(1000, 400) ➞ 1000

CODE
function maxNum(n1,n2) {

}
*/


function maxNum(n1,n2) {

    /*
    if(n1 > n2){
        return n1;
    }
    return n2;
    */

    return Math.max(n1,n2);

}

console.log("Question 4 Result: "+ maxNum(10,4));


/*
Q5. Buggy Code (Part 3)
Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

Examples
sumArray([1, 2, 3, 4, 5]) ➞ 15

sumArray([-1, 0, 1]) ➞ 0

sumArray([0, 4, 8, 12]) ➞ 24

CODE
function sumArray(arr) {

}
*/

function sumArray(arr) {

    var sum = 0;

    for(i = 0; i < arr.length; i++){
        sum += arr[i];
        //sum = sum + arr[i]
    }

    return sum;

}



console.log("Question 5 Result: " + sumArray([1, 2, 3, 4, 5]));



/*
Q6. Buggy Code (Part 4)
Emmy has written a function that returns a greeting to users. 
However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

Can you help her?

Examples
greeting("Matt") ➞ "Hello, Matt!"

greeting("Helen") ➞ "Hello, Helen!"

greeting("Mubashir") ➞ "Hello, my Love!"

CODE
function greeting(name) {

}
*/


function greeting(name) {

    if(name === "Mubashir"){
        return "Hello, my Love!";
    }
    return "Hello, " + name + "!!!";

}

console.log(greeting("Brianna"));


/*
Q7. Buggy Code (Part 5)
Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. 
Look at the examples below to get an idea of what the function should do.

Examples
printArray(1) ➞ [1]

printArray(3) ➞ [1, 2, 3]

printArray(6) ➞ [1, 2, 3, 4, 5, 6]

CODE
function printArray(number) {
 
}
*/

function printArray(number) {

    let tester = [];

    for(i = 1; i < number; i++){
        tester.push(i);
    }
    return tester;
 
}

console.log(printArray(5));

















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






/*


Matchstick Houses
This challenge will help you interpret mathematical relationships both algebraically and geometrically.

Matchstick Houses, Steps 1, 2 and 3

Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

Examples
matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436


CODE
function matchHouses(step) {
	return step === 0 ? 0 : 5 * step + 1;
}
*/






























