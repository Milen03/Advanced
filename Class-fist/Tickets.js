

function TheTiketForFilms(arr,criterion){
    let myTiketSord=[]
    class Tiket{
        constructor(destination,price,status){
            this.destination=destination
            this.price=price
            this.status=status
        }

        static sort(myTiketSord,criterion){
            if(criterion==='price'){
                myTiketSord.sort((a,b)=>a[criterion]-b[criterion])
            }else{
                myTiketSord.sort((a,b)=>a[criterion].localeCompare(b[criterion]))
            }
        }


    }


for (const data of arr) {
    let [destination,price,status]=data.split('|')

    const tickets=new Tiket(destination,Number(price),status)
    myTiketSord.push(tickets)
    
}
Tiket.sort(myTiketSord,criterion)
return myTiketSord
}
const testArr1=['Philadelphia|94.20|available', 

    'New York City|95.99|available', 
   
    'New York City|95.99|sold', 
   
    'Boston|126.20|departed']
   
   

   console.log(TheTiketForFilms(testArr1,'destination'));
   