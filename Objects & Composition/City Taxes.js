function cityTaxes(name,population,treasury){
return{
    name,population,treasury,
    taxRate: 10,
    collectTaxes(){
       this.treasury+= this.population*this.taxRate
    },
    applyGrowth(percentage){
        this.population+=Math.floor(this.population*percentage/100)
    },
    applyRecession(percent) {
        this.treasury -= Math.floor(this.treasury * percent / 100);
}
}
}
const city = 

  cityTaxes('Tortuga', 

  7000, 

  15000); 

city.collectTaxes(); 

console.log(city.treasury); 

city.applyGrowth(5); 

console.log(city.population); 