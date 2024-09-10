function sameNumber(number){
let numToStrnig=number.toString()
let isSame=true
let sum=0

let firstChar=numToStrnig[0]
for(let i=0;i<numToStrnig.length;i++){
    if(firstChar!==numToStrnig[i]){
        isSame=false
    }
    sum+=Number(numToStrnig[i])
}
console.log(isSame);
console.log(sum);
}
sameNumber(2222222)