function townPopulation(townArry){
const resuld={}

for(let entry of townArry){
    let[name,population]=entry.split(" <-> ")
    population=Number(population)
    if(resuld.hasOwnProperty(name)){
        resuld[name]+=population
    }else{
        resuld[name]=population
    }
    
}

for(let name in resuld){
    console.log(`${name} : ${resuld[name]}`);
    
}
}
townPopulation(['Sofia <-> 1200000', 

    'Montana <-> 20000', 
    
    'New York <-> 10000000', 
    
    'Washington <-> 2345000', 
    
    'Las Vegas <-> 1000000'] )