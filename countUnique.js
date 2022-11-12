//count unique elements

function unique(nums) {
  // let insertIndex = 1;
  // for(let i = 1; i < nums.length; i++){
  //     // We skip to next index if we see a duplicate element
  //     if(nums[i - 1] != nums[i]){  
  //         /* Storing the unique element at insertIndex index and incrementing
  //            the insertIndex by 1 */
  //         nums[insertIndex] = nums[i];  
  //         insertIndex++; 
  //     }
  // }
  // return insertIndex;
  

  let map = new Map();
    for(let i of nums){
        if(!map.has(i)){
            map.set(i,1)
        }else{
            map.set(i,map.get(i)+1)
        }
    }
        let ans = []
        for(let[key,value]of map){
            ans.push(parseInt(key))
            
        }
    return ans

  // let hs = new Set();
  // let n = arr.length;
  //       for(let i = 0; i < n; i++)
  //       {
  //           // add all the elements to the HashSet
  //           hs.add(arr[i]);
  //       }
          
  //       // return the size of hashset as
  //       // it consists of all Unique elements
  //       return hs.size;   
}
var nums = [1,2,2,3,3,4,5,5,6,7,8,9,10];
let result = unique(nums);
console.log(result);
