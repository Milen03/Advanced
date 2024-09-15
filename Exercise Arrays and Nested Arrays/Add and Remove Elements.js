function addAndRemoveElements(comand){
let resuld=[]
let n=1

for(let i=0;i<comand.length;i++){
    if(comand[i]==='add'){
        resuld.push(n)
    }else{
        resuld.pop()
    }
    n++
}
if(resuld.length===0){
    console.log('Empty');
    return
}
console.log(resuld.join("\n"));

}
addAndRemoveElements(['add',  

    'add',  
    
    'add',  
    
    'add'])
