function solve(arr){
let max=-Infinity
for(let row of arr){
    for (const col of row) {
if(col>max){
    max=col
}
}
}
console.log(max);

}
solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]])