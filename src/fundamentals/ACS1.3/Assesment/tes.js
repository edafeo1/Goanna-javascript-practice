import promptSync from 'prompt-sync';
import fs from 'fs';
import fetch from "node-fetch";
const prompt = promptSync();

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


