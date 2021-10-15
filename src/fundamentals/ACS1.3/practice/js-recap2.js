/*
PRACTICE

1.) write code to combine the elements of array1 that are also in array2

[1,2,3,4,5,10,15] [2,3,4,7,9]  ===> [2,3,4]

2.) var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

Range	Grade
<60	      F
<70	      D
<80	      C
<90	      B
<100      A

3.) write javascript to check weather a string starts with another string

str a      str b
Annabel     ann

4.) Remove whitespaces from a string using javascript

"      H   i  ii  i am happy      "

"hiiiiamhappy"

5.) Find the factors of a number using javascript 

12  ==>  1, 2, 2, 2, 3, 4, 6, 12
*/


function combine(arr1, arr2){

    const firstSet = new Set(arr1);
    const secondtSet = new Set(arr2);

    let resultArr = [];

    for(let i of secondtSet){


        if(firstSet.has(i)){

            resultArr.push(i);

        }
    }

    return resultArr;

}



var student_grades = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var average = 0;

for(let i = 0; i < student_grades.length; i++){

    average += student_grades[i][1];

    var AVERAGE = (average/student_grades.length);

}


if(AVERAGE < 60){
    console.log("F")
}

else if(AVERAGE < 70){

    console.log("D")

}




// STRING 


function startsWith(string, str){

    if(string.startsWith(str)){
        console.log(`Match, ${string} starts with ${str}`)
    }
    else{
        console.log("doesnt match")
    }

}

// "     ff g g  g g "

function removeWSpace(str){

    var value = str.split(' ').join('');
    return value;
}



function factors(num){

    let result = [];

    for(let i = 1; i <= num; i++ ){
        if(num % i == 0){
            result.push(i);
        }
    }

    result;
}