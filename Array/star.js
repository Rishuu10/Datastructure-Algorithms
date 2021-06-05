var star=(n)=>{
    for(let i=1;i<n;i++){
        for(let j=(n+3)-i;j>=0;j--){
            console.log("*")
        }
        for(let k=0;k<i;k++){
            console.log(i+"*");
        }
        for(let z=(n+2)-i;z>=0;z--){
            console.log("*")
        }
        console.log("\n");
    }
}
console.log(star(5))