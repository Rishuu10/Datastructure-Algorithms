var substring2=(str,ans)=>{
    if(str.length===0){
        console.log(ans)
        return
    }
    var ch=str[0];
    var code=ch.charCodeAt();
    code=code.toString()
    var temp=str.substr(1);
    substring2(temp,ans);
    substring2(temp,ans+ch);
    substring2(temp,ans+code);
}