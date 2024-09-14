function solve(arr){
let resuld=[]
for(let i=0;i<arr.length;i++){
    if(i%2!==0){
        resuld.push(arr[i])
    }
}
let final=resuld
.reverse()
.map(x => x * 2)
.join(" ")

console.log(final);

}
solve([10, 15, 20, 25])