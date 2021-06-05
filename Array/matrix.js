var directions=[[-1,0],[0,1],[1,0],[0,-1]];

var matrix=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]];
var seen= new Array(matrix.length).fill(0).map(()=>new Array(matrix[0].length).fill(false));
// console.log(seen)
var values=[];
var queue=[[2,2]]

// const dfs=(matrix,row,column,seen,values)=>{
//     if(row<0 || column<0 || row>=matrix.length || column>=matrix[0].length || seen[row][column]){
//         return 
//     }
//     values.push(matrix[row][column]);
//     seen[row][column]=true;
//     for(let i=0;i<directions.length;i++){
//         const dir=directions[i];
//         dfs(matrix,row+dir[0],column+dir[1],seen,values)
//     }
// }
const bfs=(matrix)=>{
    while(queue.length){
        var currentpos=queue.shift()
        var row=currentpos[0];
        var column=currentpos[1];
        if(row<0 || column<0 || row>=matrix.length || column>=matrix[0].length || seen[row][column]){
            continue
        }
    seen[row][column]=true;
    values.push(matrix[row][column]);
    for(let i=0;i<directions.length;i++){
        const dir=directions[i];
        queue.push([row+directions[i][0],column+directions[i][1]]);
    }
}
    return values
}
console.log(bfs(matrix))
