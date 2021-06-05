var weight=[25,25,30];
var val=[100,100,180];
var totalwt=50;
var i=3
var dp=[];
for(let i=0;i<weight.length;i++){
    dp[i]=[];
    for(let j=0;j<51;j++){
        dp[i][j]=-1
    }
}
// console.log(dp)
var kanpsack=(i,weight,val,totalwt,dp)=>{
    if(totalwt===0) return 0;
    if(i>=weight.length) return 0;
    if(dp[i][totalwt]!==-1) return dp[i][totalwt]
    if(weight[i]<=totalwt){
        var left=val[i]+kanpsack(i+1,weight,val,totalwt-weight[i],dp);
        var right=kanpsack(i+1,weight,val,totalwt,dp);
        console.log(dp)
        return dp[i][totalwt]=Math.max(left,right)
    }
    else{
        return dp[i][totalwt]=kanpsack(i+1,weight,val,totalwt,dp)
    }
}
console.log(kanpsack(0,weight,val,totalwt,dp))