var minRemoveToMakeValid = function(s) {
    let stack=[];
    var s=[...s]
    for(let i=0;i<s.length;i++){
        if(s[i]==="("){
            stack.push(s[i]);
        }
        if(s[i]===")"){
            stack.pop
        }
        if(stack.length===0 && s[i]===")"){
            delete s[i];
        }
    }
    if(stack.length>0){
        for(let i=0;i<s.length;i++){
            if(s[i]===stack[stack.length-1]){
                stack.pop()
                delete s[i]
            }
        }
    }
    return s.join("")
};
console.log(minRemoveToMakeValid("lee(t(c)o)de)"))