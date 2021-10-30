const fs = require('fs')
const prompt = require('prompt-sync')();



class Musician{
    constructor(name, yearsPlaying, hourlyRate, MusicianType){
        this.name = name;
        this.yearsPlaying = yearsPlaying;
        this.hourlyRate = hourlyRate;
        this.MusicianType = MusicianType
    }


  getNimaArtistName = () => {
    return this.name;
}
​
  getHourlyRate = () => {
    return this.hourlyRate;
}

musSummary = () =>{
    return `My name is ${this.name}, and I play the ${this.MusicianType}\n `;
}



    musDetail = () =>{
    return `Hello my name is ${name}.\n
            I have been playing for ${yearsPlaying},\n
            My Hourly rate is ${hourlyRate},\n
            I also am a ${MusicianType}\n`
}
}


class Troup{
    constructor(name, minDuration){
        this.name = name;
        this.minDuration = minDuration;
        this.genre = '';  // we are leaving this blank because it hs a condition, genre can only be one of either ROCK, POP OR BASS
        this.HourlyRate = 35;
        this.MusicianArray = [];
    }
}

