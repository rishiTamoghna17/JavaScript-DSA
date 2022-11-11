//largest Sum of congious SubArray
function solution(a, arr1) {
    //.............. sol-1..................//
  //   let maxsum = -Infinity;
  //   let currsum = 0;
  //   // kadane's algoritham
  //   for (let i = 0; i < arr1.length; i++) {
  //     currsum = currsum + arr1[i];
  //     if (currsum > maxsum) {
  //       maxsum = currsum;
  //     }
  //     if (currsum < 0) {
  //       currsum = 0;
  //     }
  //   }
  //   return maxsum;
  //.............. sol-2..................//
  let cBest = arr[0];
  let oBest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (cBest > 0) {
      cBest = cBest + arr[i];
    } else {
      cBest = arr[i];
    }
    //update overall best//
    // if (cBest > oBest) {
    //   oBest = cBest;
    // }
    oBest = Math.max(oBest, cBest);
  }
  return oBest;
}

// var a = 10;
// var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var a = 5;
var arr = [-99 ,0 ,-11 ,0 ,-1];
var res = solution(a, arr);
console.log(res);
