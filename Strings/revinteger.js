var reverse = function(x) {
    let number=x.toString();
    let string="";
    let newstring="";

    if(number[0]=="-"){
        newstring+=number[0];
        for(let i=number.length-1;i>0;i--){
            string+=number[i];
        }
    }
    else{
        for(let i=number.length-1;i>=0;i--){
            string+=number[i];
        }
    }
    if (string > Math.pow(2,31)) return 0
    var res=newstring.concat(string)
    return res
};
console.log(reverse(-1534236469))