var favNumber = 6;

if(favNumber == 6){
    document.write("your favourite number is 6");
}


/*
// 1.) var index = 1;

         //2.)
while (index <= 3 ){

document.write("The value of index is: ", index); document.write("<br />");

// 3.) index ++;

}
*/


for(var index = 1; index <=3; index++){

    document.write("The value of index is: ", index); document.write("<br />");

}


//confirm("Press a button")

//alert("This is an alert box")

//var name = prompt("Please enter your name","")



function myFunction(){
    alert("this is an alert box");

}
/*

function myfunction(text){ alert(text)

}

var email= new String(""); if (email == "" || email.indexOf("@") == -1) { alert ("Your email address is not valid");

}else {

alert ("You have entered your email address correctly");

}
*/

/*
var postcode = new String("124");

if (postcode.length != 4){
    alert("code should have 4 digits")
} else{
    alert("succesful");
}
*/


/*
var userName = new String("");

if (userName == ""){
    alert("you cant be nameless");
} else{
    alert("nice work fletch");
}
*/




var favColour = new Array();
favColour[0] = "blue";
favColour[1] = "red";
favColour[2] = "green";

document.write("Here are my favourite colours: <br/>");

for(let i = 0; i < favColour.length; i++){
    document.write(favColour[i]);
    document.write("<br/>");

}



// reverse a string ???? 😢

function stringReverse(str){

let newString = "";

for(let i = str.length - 1; i >= 0; i--){
    newString += str[i];
}
return newString;
}



function stringReverse(str){

let varrr = str.split(""); "a b s c c c"

var reverse = varrr.reverse();

var result = reverse.join("")
}






