var replace=(str)=>{
    if(str.length===0) return ""
    var ch1=str[0];
    var ch2=str[1];
    var ros=replace(str.substr(2));
    if(ch1==="p" && ch2==="i") return "3.14" + ros;
    return ch1+ch2+ros
}
console.log(replace("piabhsbdpi"))