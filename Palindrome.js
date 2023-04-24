 function palindrome(str){
    let polishedString = str.replace(/\W+|_/g, "");
    let reverseString = polishedString.split("").reverse().join("").toLowerCase();
    console.log(polishedString, reverseString)
    if(polishedString != reverseString){
        return false;
    }
    return true;
 }

let result = palindrome("eye");
console.log(result);