

function firstRecurringCharacter(arr) {
    let map=new Map()
    for(let i=0;i<arr.length;i++){
        if(Object.keys(map).find(ele=>ele==arr[i])){
            return arr[i]
        }
        map[arr[i]]=i
    } 
}
console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]))