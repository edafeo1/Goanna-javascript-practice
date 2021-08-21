/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example

The minimum sum is  and the maximum sum is . The function prints

16 24
*/


/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
            var min = 0, max = 0, sum = 0;
        min = arr[0];
        max = min;
        sum = min;
        for (var i = 1; i < arr.length; i++) {
            sum += arr[i];
            if (arr[i] < min) {
                min = arr[i];
            }
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        console.log((sum - max) + " " + (sum - min));

}

