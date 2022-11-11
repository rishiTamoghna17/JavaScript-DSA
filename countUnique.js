//count unique elements

function unique(arr) {
  //     let i = 0;
  // for(let j=1;i<arr.length;j++){

  //     if(arr[i]!==arr[j]){
  //         arr[i]==arr[j];
  //         i++;
  //     }
  // }
  // return i+1;

  let hs = new Set();
  let n = arr.length;
        for(let i = 0; i < n; i++)
        {
            // add all the elements to the HashSet
            hs.add(arr[i]);
        }
          
        // return the size of hashset as
        // it consists of all Unique elements
        return hs.size;   
}
var arr = [1, 2, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
let result = unique(arr);
console.log(result);
