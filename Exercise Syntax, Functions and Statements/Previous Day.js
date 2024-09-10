function previousDay(year,month,days){
let date=new Date(year,month-1,days)
date.setDate(date.getDate()-1,days)
console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);

}
previousDay(2016, 9, 30)