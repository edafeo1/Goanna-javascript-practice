/*
Candle heights are . The tallest candles are  units, and there are  of them.
*/

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    
    var value = Math.max(...candles);
    var count = 0;
    
    for (let i = 0; i < candles.length; i++){
        if(candles[i] == value){
            count++;
        }
    }
    
    return count;

}

