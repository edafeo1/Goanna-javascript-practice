//import reader from "readline-sync";
//import PromptSync from 'prompt-sync';
//const prompt = require('prompt-sync')()
import fs from 'fs'
import promptSync from 'prompt-sync';
import fetch from "node-fetch";
const prompt = promptSync();


//Musician Function
function Musician(name, yearsPlaying, hourlyRate){

var musicianType = ''

this.getName = () => {
    return name;
}

this.getHourlyRate = () => {
    return hourlyRate;
}

this.musSummary = () =>{
    return `My name is ${name}, and I play the ${musicianType}\n `;
}

//musician details
this.musDetail = () =>{
    return `Hello my name is ${name}.\n
            I have been playing for ${yearsPlaying},\n
            My Hourly rate is ${hourlyRate},\n
            I also am a ${musicianType}\n`
}
//Setting the musician type i.e guitarist, basist etc..
this.setMusicianType = (type) =>{
    musicianType = typeof(type) == 'string' ? type : 'Instrumentalist';
}




}


function Troup(name, minDuration){
    //this.musicianName = ''
    //this.playingYear = '';
    var hourlyRate = 35;
    let artistList = [];
    var genre = '';
    let errMsg = 'This is not allowed \nYou must enter either: rock, pop or bass\n';

    this.getName = () => {
        return name;
    }

    this.addMusician = (Musician) => {
        artistList.push(Musician);
     }
    
     this.deployCost = (hours) => {
         let cost = 0;
        for (let i = 0; i < artistList.length; i++){
            cost += hours * artistList[i].getHourlyRate();
        }
        return `Cost to deploy this troup is $${cost}\n`
        
     }

    this.troupSummary = () =>{
        console.log(
            `\n
            --------Troop Details-------\n
            Hello this is the: ${name}.\n
            The minimum duration of this Troup is: ${minDuration}, \n
            The Genre is: ${genre},\n
            There are ${artistList.length} instruments in this troup\n
            The hourly rate for this troup is ${hourlyRate}\n
            The musicians in this troup are listed below\n`
            );
    }

    this.troupDetail = () =>{
        this.troupSummary();
        for (let i = 0; i < artistList.length; i++){
            console.log(`\n
            Artist number ${i+1} details listed below:\n
            ${artistList[0].musDetail()}`
            )
        }
        //return `--------Troop Intro-------\nHello this is the ${name} .\nThe minimum duration of this Troup is ${minDuration}, \nMy Genre is ${genre}, \n musician name is ${val}`;
    }




    this.setTroupGenre = (Genre) => {
        Genre.toLowerCase() === 'rock' ? genre = 'rock'
        : Genre.toLowerCase() === 'pop' ? genre = 'pop'
        : Genre.toLowerCase() === 'bass' ? genre = 'bass'
        : console.log(errMsg);
        //genre = 'bass': genre = 'pop' : genre = 'rock';
        
    }

    

}

function main(){
    var troupList = []
    var artistList = []

/*
    this.mainMenu = () =>{

        console.log("The options are as follows: \n")
        console.log("Enter 1 to create a Musician\n")
        console.log("Enter 1 to create a Musician\n")
        console.log("Enter 1 to create a Musician\n")
        console.log("Enter 1 to create a Musician\n")

        let x = '';

    }
*/

    this.createMusician = () =>{
        console.log("Creating Musician \n")
        var name = prompt("Enter the name of the musicians: ");
        var yearsPlaying = prompt("Enter the musicians years of experience: ");
        var rate = prompt("Enter the musicians Hourly rate: ");
        var instrument = prompt("Enter the musicians instrument: \n");
        var musician = new Musician(name, yearsPlaying, rate);
        musician.setMusicianType(instrument);
        artistList.push(musician);

       // console.log();
        //return this.mainMenu();
    }

    this.createTroup = () =>{
        console.log("Creating Troup\n")
        var name = prompt("Enter the troups name: ");
        var minDuration = prompt("Enter the troups minimum duration: ");
        var genre = prompt("Enter the troups genre: ");
        var troup = new Troup(name, minDuration);
        troup.setTroupGenre(genre);
        troupList.push(troup);
       // return this.mainMenu();
    }


    this.addToTroup = (musName, troupName) =>{
        let musician = '';
        var troup = '';
        for (let i = 0; i < troupList.length; i++){
            troupList[i].getName() == troupName ? troup = troupList[i] : troup = 0;
            artistList[i].getName() == musName ? musician = artistList[i] : musician = 0;   
        }

        console.log(`Adding ${troup.getName()} to ${musician.getName()}\n`)
        troup.addMusician(musician);
        console.log(`Succesfully added ${musician.getName()} to ${troup.getName()} \n`)
        //troupList.addMusician(musician);
    }


    this.deployCost = (troupName, hours) =>{
        var troup = '';
        for (let i = 0; i < troupList.length; i++){
            troupList[i].getName() == troupName ? troup = troupList[i] : troup = 0;
        }
        
        console.log(`The cost to deploy ${troup.getName()} is: \n`);
        troup.deployCost(hours);
    }


    this.troupSummary = () =>{
        for(let i = 0; i < troupList.length; i++){
            console.log(`${troupList[i].troupDetail()}\n`);
        }
    }

    this.values = () =>{
    console.log("length is: " + artistList.length)
    }
}




function readNames(){
    fetch('/test.txt')
    .then(response => response.text())
    .then(data => {
        // Do something with your data
        console.log(data);
    });
}











// create a musician named John
var John = new Musician('john', 10, 25);
var Bob = new Musician('bob', 10, 25);
var Craig = new Musician('craig', 10, 25);

John.setMusicianType("Guitarist");
Bob.setMusicianType("Drummer");
Craig.setMusicianType("Guitarist")

// Create a Rock Troup 
var RockTroup = new Troup('First Troup', 30);

//set the troup genre to rock
RockTroup.setTroupGenre('rock');

//Add a musician object to the troop
RockTroup.addMusician(John);

//calling Troup Say hello method 
console.log(RockTroup.troupDetail());

//cost of deploying the troup
console.log(RockTroup.deployCost(3));



var ma = new main();
ma.createMusician();
ma.createTroup();
ma.addToTroup('john', 'First');
console.log('Troup Details listed below: \n');
ma.troupSummary();
console.log(readNames());


/*
get_selection = () => {
    const options = ['Please select your favourite from the following options:', '1. Pizza', '2. Ice cream', '3. Salad'].join('\n')
    const selection = prompt(options+'\n')
    console.log('you selected: ' + selection)
    return(selection)
}

get_selection();
*/