function solve(input){
let result
let inputType=typeof(input)
if(inputType==="number"){
result=Math.pow(input,2)*Math.PI
}else{
    console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    return
}
console.log(result.toFixed(2));

}
solve('name')