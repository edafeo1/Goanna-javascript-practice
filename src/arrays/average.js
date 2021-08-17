

//Write a JavaScript program which compute, 
//the average marks of the following students Then, this average is used to determine the corresponding grade.

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

function averageMarks(studentArray){

    var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}
return avg;
}



var result = averageMarks(students);

if(result > 60 ? result > 70 ? result > 80 ? result > 90 ? 
    console.log("A") : console.log("B") : console.log("C") : console.log("D") : console.log("F"));


/*
if (result < 60){
    console.log("Grade : F");      
    } 
  else if (result < 70) {
          console.log("Grade : D"); 
            } 
  else if (result < 80) 
       {
          console.log("Grade : C"); 
  } else if (result < 90) {
          console.log("Grade : B"); 
  } else if (result < 100) {
          console.log("Grade : A"); 
  }
  */