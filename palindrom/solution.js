// function palindrome (x){
//     if(x<0||(x % 10 == 0 && x != 0)) return false
//     let t = 0;
//      while (x > t) {
//         t = t * 10 + x % 10;
//         x = Math.floor(x / 10);
       
//     }
//     return t==x || x==Math.floor(t/10);
// }
// let x = 1221
// console.log(palindrome(x))


// function pal(str){
//     // let i=0;
//     // let j=str.length-1
//     // while(i<j){
//     //     if(str[i]!=str[j]){
//     //         return  ("Not palindrome")
//     //     }
//     //     i++;
//     //     j--;
//     // }
//     // return "Is palindrom"
// }
// console.log(pal("mada"))


function rev(num,temp=0){
    if(num<=0){
        return temp
    }
    temp = (temp*10)+(num%10);
    return rev(parseInt(num/10),temp)
}
// console.log(rev(145))
function chec(num){
    let reverse = rev(num);
    if(reverse==num){
        return true
    }
    else{
        return false
    }
}
console.log(chec(121))
