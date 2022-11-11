//a n size of arr and k given. find the largest sum of consicutive k numbers.
//example: arr = [1,3,2,8,4,7,9,5,1]
            // k =4
            //ans == 28[8+4+7+9]

function sum(arr,n,k){
    let maxSum = 0;
    let curSum = 0
    for(let i= 0; i<k; i++){
        curSum += arr[i];
    }
    maxSum= curSum;
    for(let i =k;i<n;i++){
        curSum = (curSum + arr[i])-arr[i-k]
        // if(curSum>maxSum){
        //     maxSum = curSum;
        // } or
        maxSum = Math.max(maxSum,curSum);
    }
    return maxSum;
    
}
const arr = [1,3,2,8,4,7,9,5,1];
var k =4;
var n = 9;
console.log(sum(arr,n,k)); 
