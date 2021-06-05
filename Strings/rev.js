var rev=(str)=>{
    if(str.length===0) return 
    var newstr=[...str];
    newstr.splice(0,1);
    newstr=newstr.join("")
    rev(newstr)
    console.log(str[0])
}
rev("binod")