/*
Q1. Maximum Edge of a Triangle
Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

Examples
nextEdge(8, 10) ➞ 17

nextEdge(5, 7) ➞ 11

nextEdge(9, 2) ➞ 10

CODE
function maximum(num1, num2) {
	
}
*/

function maximum(num1, num2) {
	if(num1 > 0 && num2 > 0){
        return (num1 + num2) - 1;
    }
    return "you need to enter values greater than zero";
}

console.log(maximum(-2,-1));

/*
Q2. Basketball Points
You are counting points for a basketball game, 
given the amount of 2-pointers scored and 3-pointers scored, 
find the final points for the team and return that value.

two point score == 2;
three point == 3;

Examples
points(1, 1) ➞ 5

points(7, 5) ➞ 29

points(38, 8) ➞ 100


CODE
function basketBallPoint(num1, num2) {
	
}
*/

function basketBallPoint(TwoPoints, threePoints) {
	return (TwoPoints*2) + (threePoints*3); 
}

console.log(basketBallPoint(7,3));

/*
Q3. The Farm Problem
In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. 
The farmer breeds three species:

chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

Examples
animals(2, 3, 5) ➞ 36

animals(1, 2, 3) ➞ 22

animals(5, 2, 8) ➞ 50

CODE
function animalCount(animal1, animal2, animal3) {
	
}
*/

function animalCount(chicken, cow, pig) {

  
    
    if(chicken >= 0 && cow >= 0 && pig >=0){
        return (2*chicken)+(cow*4)+(pig*4);
    }
    
    return "invalid animals"
	//return (2*chicken)+(cow+pig)*4;
}

console.log(animalCount(3,4,5));

/*
Q4. Let's Fuel Up!
A vehicle needs 10 times the amount of fuel than the distance it travels. However, 
it must always carry a minimum of 100 fuel before setting off.

Create a function which calculates the amount of fuel it needs, given the distance.

Examples
calculateFuel(15) ➞ 150

calculateFuel(23.5) ➞ 235

calculateFuel(3) ➞ 100

CODE
function calculatFuel(distance) {

}
*/

function calculatFuel(fuel) {

    /*
    if(fuel > 10){
        return fuel*10;
    }
    return 100;
    */

    return fuel > 10 ? fuel*10 : 100;
    
}

console.log(calculatFuel(15));


/*
Q5. Frames Per Second
Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

Examples
frames(1, 1) ➞ 60

frames(10, 1) ➞ 600

frames(10, 25) ➞ 15000

CODE
function frames(num_Of_frames, time_in_mins) {

}
*/

function frames(num_Of_frames, time_in_mins) {
    return num_Of_frames * (time_in_mins * 60);
}

console.log(frames(10,1));

/*
Q6. Two Makes Ten
Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

Examples
makesTen(9, 10) ➞ true

makesTen(9, 9) ➞ false

makesTen(1, 9) ➞ true

CODE
function greeting(name) {

}
*/





/*
Q7. Compare Strings by Count of Characters
Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

Examples
comp("AB", "CD") ➞ true

comp("ABC", "DE") ➞ false

comp("hello", "edabit") ➞ false

CODE
function printArray(number) {
 
}
*/












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
	
}
*/






























