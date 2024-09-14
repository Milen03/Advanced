function solve(arr){
arr.sort((a,b)=>a-b)
let resuld=arr.splice(0,2)
console.log(resuld.join(' '));


}
solve([30, 15, 50, 5])