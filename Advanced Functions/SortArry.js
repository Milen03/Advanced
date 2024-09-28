function SortArry(arr,method){

const resuld=arr.toSorted((a,b)=>a-b)

if(method=="desc"){
    resuld.reverse()
}
return resuld

}




SortArry([14, 7, 17, 6, 8], 'asc')
SortArry([14, 7, 17, 6, 8], 'desc')