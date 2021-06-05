var dup=(str)=>{
    if(str.length===0) return ""
    var ch=str[0];
    var ans=dup(str.substr(1));
    if(ch===ans[0]) return ans
    else return ch+ans
}
console.log(dup("aaaaaaaaaacababbbb"))