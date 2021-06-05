const lengthOfLongestSubstring=(str)=>{
    let j=0;
    let finalarray=[]
    let map={}
    let count=0
    for(i=j;i<str.length;i++){
        if(Object.keys(map).find(ele=>ele==str[i])){
            finalarray.push(count)
            count=0
            j=map[str[i]]+1
            i=j
            map={}
        }
        count++
        map[str[i]]=i
    }
    finalarray.push(count)
    return Math.max(...finalarray)
}

const lengthOfLongestSubstring1=(str)=>{
let seen={}
let left=0;
let total=0
for(let right=0;right<str.length;right++){
    let current=str[right]
    let previousseen=seen[current]
    if(previousseen>=left){
        left=previousseen+1
    }
    seen[current]=right
    total=Math.max(total,right-left+1)
}
return total
}

console.log(lengthOfLongestSubstring1("abcabcbb"))
console.log(lengthOfLongestSubstring1("bbbbb"))
console.log(lengthOfLongestSubstring1("pwwkew"))
console.log(lengthOfLongestSubstring1("dvdf"))
