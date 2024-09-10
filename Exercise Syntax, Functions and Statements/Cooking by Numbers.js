function cookingByNumbers(arg,arg1,arg2,arg3,arg4,arg5){
let num=Number(arg)
let allOfArg=[arg1,arg2,arg3,arg4,arg5]
for(let i=0;i<allOfArg.length;i++){
    let ofArg=allOfArg[i]
    switch(ofArg){
        case 'chop': num/=2; break;
        case 'dice': num=Math.sqrt(num); break;
        case 'spice':num+=1; break;
        case 'bake': num*=3; break;
        case 'fillet': num*=0.80;break;
    }
    console.log(num);
}


}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')