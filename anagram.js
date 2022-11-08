function anagram (str1,str2){
    arr1 = new Array(26).fill(0);
    arr2 = new Array(26).fill(0);
    for(let char of str1){
        arr1[char.charCodeAt(0)-'a'.charCodeAt(0)]++;
    }
    for(let char of str2){
        arr2[char.charCodeAt(0)-'a'.charCodeAt(0)]++;
    }
    for(let i = 0; i < 26; i++){
        if(arr1[i]!==arr2[i]) return false;
    }
    return true;

}
let str1 = "cta";
let str2 = "cat";
let res = anagram(str1,str2)
console.log(res)