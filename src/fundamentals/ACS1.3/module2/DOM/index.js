function changeColour(evt){

    document.body.style.backgroundColor = "cyan";
    document.body.style.color = "white";

}


function funny(){

     var john = document.getElementById("john")

    john.style.backgroundColor = "green";
}



function windowExmpl(evt){
    window.open("https://www.goodfood.com.au/recipes/recipe-collections/70-comforting-curry-recipes-20180425-h0z7pd", "_blank", "width = 50, height = 300")
}


function greeting(evt){
    var w = window.open("", "_blank", "width = 400, height = 400")
    var text = document.getElementById("greeting").innerHTML;
    var text1 = text.toUpperCase();

    w.document.write(text1);
}