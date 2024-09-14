function solve(arr){
arr.sort((a,b)=>a-b)

let mid=Math.floor(arr.length/2)
let resuld=[]
for(let i=mid;i<arr.length;i++){
resuld.push(arr[i])
}
return resuld
  
}
solve([3,19,14,7,2,19,6]);

