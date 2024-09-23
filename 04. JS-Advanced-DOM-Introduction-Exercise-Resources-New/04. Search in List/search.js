function search() {
const townListEl=document.querySelector('#towns')
const searchTextEl=document.querySelector('#searchText')
const resulEl=document.querySelector('#result')

const searchStr=searchTextEl.value.toLowerCase()
if (searchStr==" ") return

const townArry=Array.from(townListEl.children)
const town=townArry.map((el)=>el.textContent.toLowerCase())

townArry.forEach((el)=>{
   el.style.fontWeight='bold'
   el.style.textDecoration='none'
})

let resuld=[]

for(let i=0;i<town.length;i++){
   if(town[i].indexOf(searchStr)>=0){
      resuld.push(i)
   }
}

resuld.forEach((position,index)=>{
   townListEl.children[position].style.fondWeight='bold'
   townListEl.children[position].style.textDecoration='underline'
})
resulEl.textContent=`${resuld.length} matches found`
searchTextEl.value=''
}
