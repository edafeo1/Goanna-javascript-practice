/*
PRACTICE

1.) WRITE JAVASCRIPT CODE TO CHECK WEATHER TWO NUMBERS HAVE THE SAME LAST DIGIT

2.) WRITE JAVASCRIPT CODE TO FIND THE FACTORIAL OF A NUMBER ===> FN(3) ANSWER ==> 3 * 2 *1 == 6

3.) GIVEN AN ARRAY, WRITE JAVASCRIPT CODE TO REMOVE ELEMENTS AT DIFFERENT POSITIONS OF THE ARRAY

4.) WRITE JAVASCRIPT CODE TO EMPTY A GIVEN ARRAY 

5.) WRITE JAVASCRIPT TO COMPARE TO ELEMENTS OF TWO ARRAYS

6.) write javascript code to sum the producst of two values until it reachess 10,000

7.) WRITE JAVASCRIPT CODE TO PERFORM INTERSECTIONS BETWEEN TWO ARRAYS

*/


var firstDigit = 355;
var secondDigit = 355;

function checkLast(num1 , num2){

    var val1 = num1 % 10;
var val2 = num2 % 10;

if(val1 == val2){
    console.log("the last digits of -> " + firstDigit + " and -> " + secondDigit + " are the same ");
}
else{
    console.log("They are not the same")
}
}


function factorial(num){

    //var num = parseInt(prompt("Enter a number: "));

    if(num == 0){
        console.log("enter non zero value")
    }

    let result = 1;
    for(let i = 1; i <= num; i++){
        result *= i;
    }

    console.log(`the factorial value of ${num} is = ${result}`);

}

factorial(3);


function removeval(arr){



}





function emptyArr(arr){

    arr = [];

    //arr.splice(0, arr.length);
    return arr;
}


function compare (arr , arr2){

   /*
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != arr2[i]){
            return false;
        }
        else{
            return true;
        }
    }
    */


    var val = JSON.stringify(arr) == JSON.stringify(arr2);

    if(val){
        console.log("values are equal");
    }
    

}


function sum2Vals( num1 , num2 ){
    var prod = num1 * num2;

    while(prod < 10000){
        prod++;
    }

    return prod;

}

function combine(arr, arr1){
    //let newArr = arr.concat(arr1);

    let newArr = [...arr, ...arr1];

    return newArr;
}

console.log(combine([1,4], [2,4]));










let x = 10;

while(x<100){

    console.log("looping")
    x++;
}

