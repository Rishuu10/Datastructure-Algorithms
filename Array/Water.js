// Brute force approach not so good 
const water=(arr)=>{
    let i=0,j=0;
    var max=0;
    var area=0
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]<=arr[j]){
                let length=arr[i]
                let breadth=[j-i]
                area= length*breadth;
            }
            else{
                let length=arr[j];
                let breadth=[j-i]
                area= length*breadth
            }
            if(area>max){
                max=area
            }
        }
    }
    return max;
}
// console.log(water([4,3,2,1,4]));

//optimal solution

const water1=(arr)=>{
    let i=0,j=arr.length-1;
    var max=0;
    var area=0
    while(i<j){
        if(arr[i]<=arr[j]){
            let length=arr[i]
            let breadth=[j-i]
            area= length*breadth;
            i++;
        }
        else{
            let length=arr[j];
            let breadth=[j-i]
            area= length*breadth
            j--
        }
        if(area>max){
            max=area
        }
    }
    return max;
}

console.log(water1([1,2,1]));