function addItem() {
    //TODO...
    
        const input=document.getElementById('newItemText')
        const list=document.getElementById('items')
      
        const text=input.value
        if(!text){
          return
        }
        const newItems=document.createElement('li')
        newItems.textContent=text

        const buttonDelete=document.createElement('a')
buttonDelete.textContent='[Delete]'
buttonDelete.href='#'
newItems.appendChild(buttonDelete)
buttonDelete.addEventListener('click',onClick)



        
        list.appendChild(newItems)

        input.value=""

        function onClick(e){
            const btn=e.target
            btn.parentElement.remove()
        }
      }
