function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {     //check squire keys of frequencyCounter1 are present in frequencyCounter2
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {       //value of both obj is equal
      return false;
    }
  }

  return true;
}


var arr1 = [2, 2, 1,3];
var arr2 = [4, 4, 1,9];
var res = same(arr1, arr2);
console.log(res);

let map = new Map();
let arr = [1,2,4,5,6,1,3,4,6,9,10];
for(let item of arr){
    if(!map.has(item)){
        map.set(item,1)
    }
    else{
        map.set(item,map.get(item)+1)
    }
}
console.log(map)

// map.set("a",1)
// map.set("b",1)
// console.log(map.get("a"))
// // set
// //get
// //has
// //delete
// //size
// console.log(map.size)
