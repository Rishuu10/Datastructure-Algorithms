var array = function(lowLimit, highLimit) {
    let arr=[]
    while(lowLimit!==highLimit+1){
        n=String(lowLimit)
        if(n.length===1){
            n="0" + n
            arr.push([...n])
        }
        else{
            arr.push([...n])
        }
        lowLimit=lowLimit+1;    
    }
    console.log(arr)
    return arr 
}
var loda=(lowLimit, highLimit)=>{
    var originalarr=array(lowLimit,highLimit);
    var newarr=[];
    console.log(originalarr.length)
    for(let i=0;i<originalarr.length;i++){
        if(originalarr[i].length==2){
            var added=parseInt(originalarr[i][0])+ parseInt(originalarr[i][1])
            newarr.push(added);
        }
        if(originalarr[i].length==3){
            var added=parseInt(originalarr[i][0])+parseInt(originalarr[i][1])+parseInt(originalarr[i][2])
            newarr.push(added);
        }
        if(originalarr[i].length==4){
            var added=parseInt(originalarr[i][0])+parseInt(originalarr[i][1])+parseInt(originalarr[i][2])+parseInt(originalarr[i][3])
            newarr.push(added);
        }
        if(originalarr[i].length==5){
            var added=parseInt(originalarr[i][0])+parseInt(originalarr[i][1])+parseInt(originalarr[i][2])+parseInt(originalarr[i][3])+parseInt(originalarr[i][4])
            newarr.push(added);
        }
        if(originalarr[i].length==6){
            var added=parseInt(originalarr[i][0])+parseInt(originalarr[i][1])+parseInt(originalarr[i][2])+parseInt(originalarr[i][3])+parseInt(originalarr[i][4])+parseInt(originalarr[i][5])
            newarr.push(added);
        }
    }
    console.log(newarr)
return newarr
}
var countBalls=(lowLimit,highLimit)=>{
var newarr1=loda(lowLimit,highLimit)
var mf = 1;
var m = 0;
for (var i=0; i<newarr1.length; i++)
{
        for (var j=i; j<newarr1.length; j++)
        {
                if (newarr1[i] == newarr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                }
        }
        m=0;
}
return mf
}

console.log(countBalls(174,303))
console.log(array(174,303))