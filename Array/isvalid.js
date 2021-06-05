// var isValid = function(s) {
//     for(let i=0;i<s.length;i++){
//         for(let j=s.length-1;j>=0;j--){
//             if(s[i]===s[j]){
//                 return false;
//             }
//             return true
//         }
//     }
// };
// console.log(isValid("(}"))
var addTwoNumbers = function(l1, l2) {
    var arr1=[];
    var arr2=[];
    var newGuess=[]
    while(l1!==null){
        arr1.push(l1.val);
        l1=l1.next
    }
    while(l2!==null){
        arr2.push(l2.val);
        l2=l2.next
    }
    a1=arr1.join("")
    a2=arr2.join("")
    console.log(a1)
    console.log(a2)
    sum=parseInt(a1)+parseInt(a2)
    s=sum.toString()
   for (let i = 0; i < s.length; i++)
    {
        newGuess[i] = s.charAt(i) - '0';
    }
    console.log(newGuess.reverse())
    return newGuess.reverse()
};
addTwoNumbers([2,4,3],[5,6,4])