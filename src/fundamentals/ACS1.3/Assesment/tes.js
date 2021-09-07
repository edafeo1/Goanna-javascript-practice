import promptSync from 'prompt-sync';
import fs from 'fs';
import fetch from "node-fetch";
const prompt = promptSync();

/*
let get_selection = () => {
    const options = ['Please select your favourite from the following options:', '1. Pizza', '2. Ice cream', '3. Salad'].join('\n')
    const selection = prompt(options+'\n')
    console.log('you selected: ' + selection)
    return(selection)
}

get_selection();

const logFileText = () => {
    fs.readFile('file.txt', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(data)
      })
}

logFileText();


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
*/