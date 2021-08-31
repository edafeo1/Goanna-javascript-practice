/*
Task

Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

If the first character in string  is in the set , then return A.
If the first character in string  is in the set , then return B.
If the first character in string  is in the set , then return C.
If the first character in string  is in the set , then return D.
*/


function getLetter(s) {
    let letter;
    // Write your code here
    
   
    switch (true) {
        case 'aeiou'.includes(s[0]):
            letter = 'A';
            break;
        case 'bcdfg'.includes(s[0]):
            letter = 'B';
            break;
        case 'hjklm'.includes(s[0]):
            letter = 'C';
            break;
        case 'npqrstvwxyz'.includes(s[0]):
            letter = 'D';
            break;
    }
    return letter;
}










/*
Task

Conditional Statements if-else 
*/






function getGrade(score) {
    
    let grade;

//    if (score > 25 &&  score <= 30){
//         grade = 'A';
//     }

//     else if (score > 20 && score <= 25) {
//         grade = 'B';
//     }


//     else if (score > 15 && score <= 20) {
//         grade = 'C';
//     }


//     else if (score > 10 && score <= 15) {
//         grade = 'D';
//     }

 
//     else if (score > 5 && score <= 10) {
//         grade = 'E';
//     }


//     else if (score > 0 && score <= 5) {
//         grade = 'F';
//     }


return (score > 0 && score <= 5) ? 'F' :
(score > 5 && score <= 10) ? 'E' :
(score > 10 && score <= 15) ? 'D' : 
(score > 15 && score <= 20) ? 'C' :
(score > 20 && score <= 25) ? 'B' : 
(score > 25 && score <= 30) ? 'A' : 
'value must be between 0 and 30'; 
}
    


// ********** This was the wrong attempt by me, my brain was asleep guys my apologies **********
//     return (score > 25 && score <= 30) ? 
//     (score > 20 && score <= 25) ? 
//     (score > 15 && score <= 20) ? 
//     (score > 10 && score <= 15) ? 
//     (score > 5 && score <= 10) ? (score > 0 && score <= 5) ?  'score must be more than 0' :  'F' :   'E' :  'D' :   'C' :  'B' : 'A';
// }


console.log(getGrade(14));
