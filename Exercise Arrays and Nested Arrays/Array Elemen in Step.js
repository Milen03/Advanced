function solve(arr,step){
let resuld=[]
for(let i=0;i<arr.length;i+=step){
    resuld.push(arr[i])
}
return resuld
}
console.log(solve(['5',  

    '20',  
    
    '31',  
    
    '4',  
    
    '20'],  
    
    2 ))