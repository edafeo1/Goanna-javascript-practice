//Musician Function
function Musician(name, yearsPlaying, hourlyRate){

var musicianType = ''

//musician greeting
this.sayHello = () =>{
    return `Hello my name is ${name}.\nI have been playing for ${yearsPlaying},\nMy Hourly rate is ${hourlyRate},\nI also am a ${musicianType}`;
}
//Setting the musician type i.e guitarist, basist etc..
this.setMusicianType = (type) =>{
    musicianType = typeof(type) == 'string' ? type : 'Instrumentalist';
}

this.getName = () => {
    return name;
}


}


function Troup(name, minDuration){
    //this.musicianName = ''
    //this.playingYear = '';
    let artistList = [];
    var genre = '';
    let errMsg = 'This is not allowed \nYou must enter either: rock, pop or bass\n';

    this.sayHello = () =>{
        let val = artistList[0].getName();
        return `--------Troop Intro-------\nHello this is the ${name} .\nThe minimum duration of this Troup is ${minDuration}, \nMy Genre is ${genre}, \n musician name is ${val}`;
    }




    this.setTroupGenre = (Genre) => {
        Genre.toLowerCase() === 'rock' ? genre = 'rock'
        : Genre.toLowerCase() === 'pop' ? genre = 'pop'
        : Genre.toLowerCase() === 'bass' ? genre = 'bass'
        : console.log(errMsg);
        //genre = 'bass': genre = 'pop' : genre = 'rock';
        
    }

    
    this.addMusician = (Musician) => {
       artistList.push(Musician);
    }
    

}
var John = new Musician('john', 10, 25);
var RockTroup = new Troup('First Troup', 30);
//RockTroup.setTroupGenre('rock');
console.log(RockTroup.addMusician(John));
console.log(RockTroup.sayHello());






//John.setMusicianType("guitarist");
//console.log(John.sayHello());


