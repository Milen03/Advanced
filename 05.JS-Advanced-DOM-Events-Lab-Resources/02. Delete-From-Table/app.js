function deleteByEmail() {
   const input =document.querySelector('[name="email"]')
const patters=input.value.toLocaleLowerCase()
const output=document.getElementById('result')
if(!patters){
    return
}

const rows=document.querySelectorAll('#customers tbody tr')
let found=false

for(let i =0;i<rows.length;i++){
    const currentRow=rows[i]
    if(currentRow.textContent.toLocaleLowerCase().includes(patters)){
        currentRow.remove()
        found=true
    }
}
input.value=''
if(found){
output.textContent='Delete.'
}else{
    output.textContent='Not found.'
}

}