/*

BASIC QUESTIONS 


- Return the last element of the array : getLastValue(arr);


- Display "Hello World" to the console


- Create a function that takes a number as an argument, increments the number by +1 and returns the result


- Write a function that takes the base and height of a triangle and return its area.


- Write a function that converts hours into seconds.


- Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.


- Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.


ADVANCED QUESTIONS


- Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

-  Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

- Create a function that takes a number as an argument and returns the highest digit in that number.


*/

//Question 1

function getLastValue(arr)
{
    var lasttElement = arr[arr.length-1];
    return lasttElement;
}

let testArray = [1,2,3,4,5];

console.log("First Question value: " + getLastValue(testArray)); 




// Question 2 

console.log("Second Question Value: Hello World");


// Question 3 

function incrementBy1(value){
    return value+1;
}

console.log("Third Question value: "+ incrementBy1(22));


// Question 4 

function triangleArea(base, height){
    return 0.5*(base * height);
}

console.log("Fourth Question Value: " + triangleArea(10,2));

// Question 5
 function hoursToSecond(hours){
     return hours*3600;
 }




 //console.log("Fifth Question Value: "+ hoursToSecond(12));


 // Question 6
 //- Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

 function lessThan100(num1, num2){
     return (num1 + num2) < 100;

    /*
    if(num1 + num2 < 100){
        return true;
    }
    return false;
    */
 }

 console.log("Sixth Question Value: "+ lessThan100(5,90));


 // Question 7
 //Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

 function minMax(arr){

    // let min = Math.min(arr);
    // let max = Math.max(arr);
    // return [ Math.min(arr), Math.max(arr) ];

 arr.sort(function(a, b) {
    return a - b;
  });

  const minValue = arr[0];
  const maxValue = arr[arr.length-1];

  var result = "MinValue: " +  minValue + " MaxValue: "+ maxValue;

  return result


 }

 console.log(minMax([1,2,3,4]));


 // Question 8 
 // Create a function that takes two strings as arguments and returns the 
 // number of times the first string (the single character) is found in the second string.

 function checkCharacters(str1, str2){
     var count = 0;

     for(value of str2){
         if(value == str1){
             count++;
         }
         continue;
     }

     return count;
 }

 

 console.log(checkCharacters("a", "Haaaappy"));


 // Question 9
 // Create a function that takes a number as an argument. 
 // Add up all the numbers from 1 to the number you passed to the function. 
 // For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

 function addUpDigit(val){
     var count = 0;

     for(i = 1; i <= val; i++){
         //count++;
         count+=i;  //==> count = count + i;
     }

     return count;
 }

 console.log(addUpDigit(5));


 // Question 9
 // Create a function that takes a number as an argument and returns the highest digit in that number.


 

 function highestDigit(number) {
    // var value = number.toString();
    
    222 = "222"
    222 = ["2", "2", "3"]

    // ...String --> is used to specify that we convert all values to string 
	return Math.max(...String(number));
}



 console.log(highestDigit(439));









