var replace=(str)=>{
    if(str.length===0) return
    if(str[0]==="p" && str[1]==="i"){
        console.log("3.14")
         replace(str.substr(2))
    }
    else{
        console.log(str[0])
        replace(str.substr(1))
    }
}
replace("pippppi")