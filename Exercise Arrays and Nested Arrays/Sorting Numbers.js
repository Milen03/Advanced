function sortingNumber(arr){
let resuld=[]
arr.sort((a,b)=>a-b)
let index=0

while(arr.length!==0){
    if(index%2===0){
        resuld.push(arr.shift())
    }else{
        resuld.push(arr.pop())
    }
    index++
}
return resuld
}
console.log(sortingNumber([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
