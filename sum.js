// Find substrings whose sum of ASCII value is divisible by K
// Given a string S and a number K, find the number of substrings of length K whose sum of ASCII value of characters is divisible by K.

// Input:
//    s= bcgabc
//     k=3

// Output:
//      2
// Explanation:Substring “bcg” has sum of ASCII values 300 and “abc” has sum of ASCII values 294 which are divisible by 3.

function sum (s, k) {
    let currsum=0;
    let count = 0;
    if(s.length<k) return 0;
    for(let i = 0; i < k; i++) {
        currsum+=s[i].charCodeAt(0)

        if(currsum%3==0){
            count = 1;
            
        }
}
for(let i = k; i < s.length; i++) {
    currsum = (currsum+s[i].charCodeAt(0))-s[i-k].charCodeAt(0)
    if(currsum%3==0){
        count = count + 1;
    }
}
return count;
}

// var s = "a";
// var k =5;

// var s = "adkf";
// var k =1;

// var s = "bcgabc";
// var k =3

// var s ="abcdefghijklm"
// var k =13
console.log(sum(s,k));
