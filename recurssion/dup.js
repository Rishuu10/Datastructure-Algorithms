var dup=(str)=>{
    if(str.length===0) return "";
    var ch=str[0];
    var ros=dup(str.substr(1));
    if(ch===ros[0]) return ros
    return ch+ros
}
console.log(dup("aabbac"))