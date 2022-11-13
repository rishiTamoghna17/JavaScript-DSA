function check(ch){
    if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u") return  true;
    return false
}
var maxVowels = function(s, k) {
   let count =0;
   let maxCount =0;

   for(let i=0; i<k; i++){
       if(check(s[i])) count++;
   }
   maxCount = Math.max(maxCount,count);

   for(let i=k; i<s.length; i++){
       if(check(s[i-k])) count--;
       if(check(s[i])) count++;
   maxCount = Math.max(maxCount,count)
   }
   return maxCount
};
var s = "abciiidef"
var k= 3
let res = maxVowels(s, k)
console.log(res)