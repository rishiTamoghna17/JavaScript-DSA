// Given a sorted array arr[] of size N and a number X, find a pair in array whose sum is closest to X.
// Example:-
// Input:

// N=6, X = 54

// arr[]= (10, 22, 28, 29, 30, 40)

// Output: 22 30

// Explanation: As 22+ 30, 52 is closest to 54.

function closestSum(arr,n,x){
let start = 0;
let end = n-1;
let sum = 0;
let diff = Infinity;
while(start < end){
    if(Math.abs((arr[start]+arr[end])-x)<diff){
        sum = arr[start]+arr[end]
        diff = Math.abs((arr[start]+arr[end])-x)
        console.log(diff)
        console.log([arr[start],arr[end]])
        console.log(sum)
    }
    if(arr[start]+arr[end]>x) end--;
    else if(arr[start]+arr[end]<x) start++;

}
return sum;
}
let arr = [10, 22, 28, 29, 30, 40];
let n = 6;
let x = 54;
let res = closestSum(arr,n,x);
console.log(res);