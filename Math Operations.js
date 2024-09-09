function solve(num1,num2,operators){
let result
switch(operators){
    case '+':result=num1+num2; break;
    
     case '-':result=num1-num2;break;
     
     case '*':result=num1*num2;break;
     
     case '/':result=num1/num2;break;
     
     case '%':result=num1%num2;break;
     
     case '**':result=num1**num2;break;
     
}
console.log(result);

}
solve(3, 5.5, '*')