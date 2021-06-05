var movex=(str)=>{
    if(str.length===0) return "";
    var ch=str[0];
    var ros=movex(str.substr(1));
    if(ch==="x") return ros+ch;
    return ch+ros
}
console.log(movex("axbx"))