function calorieObject(data){
let resuld={}

for(let i=0;i<data.length;i+=2){
let key=data[i]
let value=Number(data[i+1])

resuld[key]=value
}
console.log(resuld);

}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])