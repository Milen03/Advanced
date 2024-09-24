function addItem() {
  const input=document.getElementById('newItemText')
  const list=document.getElementById('items')

  const text=input.value
  if(!text){
    return
  }
  const newItems=document.createElement('li')
  newItems.textContent=text
  list.appendChild(newItems)
  input.value=""
}