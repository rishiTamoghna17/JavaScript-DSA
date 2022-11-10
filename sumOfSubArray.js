//Given an array Arr of N positive integers and another number X. Determine whether or not there exist two elements in Arr whose sum is exactly X.
//example:-
// Input:

// N = 6, X = 16

// Arr = [1, 4, 45, 6, 10, 8]
//arr = [1,4,6,8,10,45]

// Output: Yes

// Explanation: Arr[3] + Arr[4] = 6 + 10 = 16


function sum(arr,n,x){
    arr.sort((a,b)=> a-b)
    console.log(arr)
var start = 0;
var end = n-1;
while(start<end){
  if(arr[start] + arr[end] ==x) return true;
    if(arr[start]+arr[end]>x) end--;
    if(arr[start]+arr[end]<x) start++;
}
return false;
}
var arr = [1, 4, 45, 6, 10, 8];
var n = 6;
var x = 16;
res = sum(arr,n,x);
console.log(res);