var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();

/*

if else method 

if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
*/

// more effecient 
dd = dd < 10 ? '0'+ dd : dd;
mm = mm < 10 ?  '0'+ mm : mm;


today = mm+'-'+dd+'-'+yyyy;
console.log(today);