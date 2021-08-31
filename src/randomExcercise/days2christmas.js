today=new Date();

const christMas=new Date(today.getFullYear(), 11, 25);

//check if current day of the year is already past christmas
if (today.getMonth()==11 && today.getDate()>25) {
// change the value of the christmass day to the next year
christMas.setFullYear(christMas.getFullYear()+1); 
}  
// one day is made up of 1000 ms, 60 s, 60 m, 24 h 
const one_day=1000*60*60*24;

console.log(`${Math.ceil((christMas.getTime()-today.getTime())/(one_day))} days left until Christmas!`);
