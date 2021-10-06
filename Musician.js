// import file writer fs 

// import input system



//Properties for musician --> *Instrument , name, yearsPlaying, hourlyrate

//functionalities for troup --> *summary(contains all the details of the Musician)
//                              *musicianDetails

//Properties for Troup --> *name, minimum duration, genre, array

//functionalities for troup --> *summary(contains all the details of the troup)
//                              *TroupDetail(contain the summary ☝🏾)
//                              *deployCost( number of hours * minumum duration )
//                              





//Musician Class 

/*
class Musician{
    constructor(instrument, name, yearsPlaying, hourlyrate){
        this.instrument = instrument;
    }
}

*/


class Musician{

    constructor(MusicianName, instrumentPlayed, yearsPlaying, hourlyRate, interestingFact) {
        this.MusicianName = MusicianName
        this.instrumentPlayed = instrumentPlayed
        this.yearsPlaying = yearsPlaying
        this.hourlyRate = hourlyRate
        this.interestingFact = interestingFact
    }


    // Getters and Setters --> they are special methods used for retrieving our class properties 

    getMusName(){
        return this.MusicianName;
    }

    getinstrPlayed(){
        return this.instrumentPlayed;
    }



    setMusName(newName){
        this.MusicianName = newName;
    }

    setinstrPlayed(newInstr){
        this.instrumentPlayed = newInstr;
    }


    musicianSummary(){
        return 
        "The name of the musician is " + this.MusicianName + "his hourly rate is " + this.hourlyRate 
        + "His interesting fact is " + this.interestingFact + "He pkays the " + this.instrumentPlayed 
        + "He has been playing for " + this.yearsPlaying + " Years now";

    }
// we can CALL OR USE functions/methods inside of another function/ method 
    musicianDetails(){
        return 'The summary of the musican has been printed above' + this.musicianSummary();
    }





}




//Troup Class 

var bobby = new Musician("Shane", 'Guitar', 5, 100, "i am a legend");

// we have our function which is being called 

// the function takes an object , 

// the object ius created and stored in a variable called shane 


/*
function addMusician(newMusician){
    // name of the array ---> followed by .push()
        this.arrayOfMus.push(newMusician);
    }

addMusician(Shane);
*/

//👇🏾👇🏾👇🏾initialising the variable    👇🏾👇🏾👇🏾 assigning values according to constructor 
var troupName = new Troup('BluesBrothers', 6);




class Troup{

    constructor(name, minimumDuration)
    {
        this.name = name
        this.minimumDuration = minimumDuration
        // [] == empty for arrays | '' == empty for strings, this means variable holds nothing at the moment 
        this.arrayOfMus = [];
    }

    addMusician(newMusician){
    // name of the array ---> followed by .push()
        this.arrayOfMus.push(newMusician);
    }

    getName(){
        return this.name
    }

    getGenre(){
        return this.genre
    }

    setName(newName){
       this.name = newName
    }

    setGenre(newGenre){

        // CONDITIONS SETTINGS TO BE ADDED LATER
        this.genre = newGenre
    }


    troupSummary(){
        return 
        "The name of the troup is " + this.name + " the minimum duration is " + this.minimumDuration;
    }


    troupDetail(){
       
    }

   


}

      // object oriented approach ,, not a javascript feature 
      //       MusicianName, instrumentPlayed, yearsPlaying, hourlyRate, interestingFact
var Shane = new Musician("Shane", 'Guitar', 5, 100, "i am a legend");


// Main Goal ---> have the musician in introduce themself 
// 👇🏾👇🏾
// have a list of musicians (AKA array containing musicians)
// have a method to add musician objects (method will be taking musician OBJECT as parameter)



// OBJECT-->VALUES  -----  CLASS-->PROPERTIES



//Class to run program 


function stage(){

    // array of musicians and troups, 
    // this just to keep reference of the future troups/musicians objects we may be creating 
    // AKA our mini database of troups/musicians

    var TroupList = [];
    var MusList = [];


// -------- Musician Section ------------
    // create a musician using prompt values, example below 
    let name = prompt("Enter the Musican name")

    // using the prompt values above, create a new musician objetc with the values from the prompt statement 

    // set the musician instrument HINT --> call the musician setinstrPlayed() method 

    // add musician to the list existing list 


// -------- Troup Section ------------
    // create a Troup using prompt values, example below 
    let name = prompt("Enter the Musican name")

    // using the prompt values above, create a new Troup objetc with the values from the prompt statement 

    // set the Genre of the troup HINT --> call the setGenre() method 

    // add Troups to the list existing list 



}







































//created function 
// functions can take parameters or values , 
// and they use this within their lifecyle to perfom task 
function sum(dummy1, dummy2){
    return dummy1 + dummy2;
}

//call -- instead of 'use'

sum(2,3);

var value = sum(2,3);
var valuetTen = sum(2,8);
var addiction = value + 100 ;

//console.log(sum(2,3));
