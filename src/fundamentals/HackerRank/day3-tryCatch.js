

/*
 s = Number(1234)is not a string type, so it can't be reversed using string functions. When we try to reverse it anyway, it throws an exception. We then catch the exception and print its , which is s.split is not a function. Next, we finally print  which, because it wasn't able to be reversed, is Number(1234).

 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
        try {
        s = s.split('').reverse().join('');
    }
    catch(e) {
        console.log(e.message);
    }
    finally {
        console.log(s);
    }
}

