var backspaceCompare = function(S, T) {
    let arrS=[],arrT=[];
    for(let i=0;i<S.length;i++){
        if(S[i]=="#"){
           arrS.pop()
           }
        else{
            arrS.push(S[i])
        }
    }
    for(let j=0;j<T.length;j++){
        if(T[j]=="#"){
           arrT.pop()
           }
        else{
            arrT.push(T[j])
        }
    }
    return arrS.join("")===arrT.join("")
}
console.log(backspaceCompare("a#b#","cd##"))