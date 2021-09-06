const prompt = require('prompt-sync')()

let get_selection = () => {
    const options = ['Please select your favourite from the following options:', '1. Pizza', '2. Ice cream', '3. Salad'].join('\n')
    const selection = prompt(options+'\n')
    console.log('you selected: ' + selection)
    return(selection)
}

get_selection();