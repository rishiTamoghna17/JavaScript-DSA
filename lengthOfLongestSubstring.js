var lengthOfLongestSubstring = function(s) {
    let map = new Map()
    let i=0;
    let j=0;
    let max = 0;
    while(j<s.length){
        if(!map.has(s[j])){
            map.set(s[j],1)
            max = Math.max(max,map.size)
            j++
        }
        else{
            map.delete(s[i])
            i++
        }
        console.log(map)
    }
};
var s = "abcabcdefghibejklmnopqrstuvwxyz"
var res =lengthOfLongestSubstring(s)
console.log(res)