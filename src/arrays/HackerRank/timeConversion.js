/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
*/

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    const arr = s.slice(0,8).split(':');
arr[0] = (s.indexOf('PM') > -1) ?
         (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
         (arr[0] == 12 ? '00' : arr[0]);
return arr.join(':');

}
