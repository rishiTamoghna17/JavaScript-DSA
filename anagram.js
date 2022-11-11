function anagram (str1,str2){
    // arr1 = new Array(26).fill(0);
    // arr2 = new Array(26).fill(0);
    // for(let char of str1){
    //     arr1[char.charCodeAt(0)-'a'.charCodeAt(0)]++;
    // }
    // for(let char of str2){
    //     arr2[char.charCodeAt(0)-'a'.charCodeAt(0)]++;
    // }
    // for(let i = 0; i < 26; i++){
    //     if(arr1[i]!==arr2[i]) return false;
    // }
    // return true;


    //.................onother aproch..........//

    if(str1.length!==str2.length){
        return false;
    }
    let obj ={};
    for(let item of str1){
        obj[item]=(obj[item] || 0)+1;
    }
    for(let item of str2){
        if(!obj[item]) return false;
        obj[item]-=1;
    }
    return true;

}
let str1 = "ctt";
let str2 = "tct";
let res = anagram(str1,str2)
console.log(res)