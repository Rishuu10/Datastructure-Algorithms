var rev=(str)=>{
    if(str.length===0) return
    rev(str.substr(1));
    console.log(str[0])
}
rev("binod")