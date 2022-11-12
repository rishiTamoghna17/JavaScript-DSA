// given an array A of N elements. Find the majority element in the array. A majority element in an array A of size N is an element that appears more than N/2 times in the array.


// example: 1
// Input:
// N = 3 
// A[] = {1,2,3} 
// Output:
// -1
// Explanation:
// Since, each element in 
// {1,2,3} appears only once so there 
// is no majority element.


// Example 2:
// Input:
// N = 5 
// A[] = {3,1,3,3,2} 
// Output:
// 3
// Explanation:
// Since, 3 is present more
// than N/2 times, so it is 
// the majority element.


function majorityElement(arr, n){
        //your code here
        //let obj =={}
        let max =0
        let k;
        let map =new Map()
        for(let item of arr){
            if(!(map.has(item))){
                map.set(item,1)
            }else{
        map.set(item,map.get(item)+1)
            }
        }
        for(let [key,val] of map){
        
            if(val>max){
                max= val;
                 k = key
            }
            if(max>n/2) return k
        }
        return -1
        
    }
// let n = 3
// let arr = [1,2,3]
let n =6;
// let arr = [3,2,3,1,3,3]
    let arr =[1,1,2,3,4,5]
let res = majorityElement(arr, n)
console.log(res);