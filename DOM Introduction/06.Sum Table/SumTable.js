function sumTable() {
const output=document.getElementById("sum")


let tableRow=document.querySelectorAll('table tr')
let row=Array.from(tableRow).slice(1,-1)
let cols=row.map(r=>r.children[r.children.length-1])
let sum=0
for(let col of cols){
    sum+=Number(col.textContent)
}
output.textContent=sum
}