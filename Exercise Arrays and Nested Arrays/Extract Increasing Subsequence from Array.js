function solve(arr){
let biggestOne=arr.shift()
let resuld=[]
resuld.push(biggestOne)

for (let el of arr) {
    if(el>=biggestOne){
        resuld.push(el)
        biggestOne=el;

    }
}
return resuld

}
solve([20,  

    3,  
    
    2,  
    
    15, 
    
    6,  
    
    1] )