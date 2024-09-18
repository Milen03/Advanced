function storeCatalogue(data){
    let store={}

    for(let el of data){
        let [key,value]=el.split(" : ")
        value=Number(value)
        store[key]=value
    }

    let sortResult=Object.entries(store).sort((arrA,arrB)=>arrA[0].localeCompare(arrB))
    let surenGrupeChar=""
    for(let el of sortResult){
        let key=el[0]
        let value=el[1]
        if(surenGrupeChar!==key[0]){
            surenGrupeChar=key[0]
            console.log(surenGrupeChar);
            
        }

        console.log(`  ${key}: ${value}`);
        
    }
}
storeCatalogue(['Appricot : 20.4', 

    'Fridge : 1500', 
    
    'TV : 1499', 
    
    'Deodorant : 10', 
    
    'Boiler : 300', 
    
    'Apple : 1.25', 
    
    'Anti-Bug Spray : 15', 
    
    'T-Shirt : 10'])