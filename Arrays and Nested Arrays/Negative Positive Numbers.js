function soleve(arr){
let result=[]

for (let element of arr) {
    if(element<0){
        result.unshift(element)
    }else{
        result.push(element)
    }
}
for (const element of result) {
    console.log(element);
    
}
}
soleve([7, -2, 8, 9])