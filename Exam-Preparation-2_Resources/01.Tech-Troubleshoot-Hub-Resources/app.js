window.addEventListener('load', solution);

function solution() {
 const addBtn=document.querySelector('#add-btn')
 addBtn.addEventListener('click',readInput)

 //Cart Panel
 const previewList=document.querySelector('.preview-list')
 const pendingList=document.querySelector('.pending-list')
 const resolvedList=document.querySelector('.resolved-list')

 //Input Fields
 const employeeInput=document.querySelector('#employee')
 const categoryInput=document.querySelector('#category')
 const urgencyInput=document.querySelector('#urgency')
 const teamInput=document.querySelector('#team')
 const descriptionInput=document.querySelector('#description')

 let employee;
 let category;
 let urgency;
 let team;
 let description;




 function readInput(event){
event.preventDefault() 

employee=employeeInput.value
category=categoryInput.value
urgency=urgencyInput.value
team=teamInput.value
description=descriptionInput.value

if(employee==''||category==''||urgency==''||team==''||description==''){
  return
}

addBtn.disabled=true
employeeInput.value=''
categoryInput.value=''
urgencyInput.value=''
teamInput.value=''
descriptionInput.value=''

createPreview(employee,category,urgency,team,description)

 }
function createPreview(employee,category,urgency,team,description){
  const element =document.createElement('li')
  element.className='problem-content'
  const article = document.createElement('article')
  article.appendChild(createPara(`From: ${employee}`))
  article.appendChild(createPara(`Category: ${category}`))
  article.appendChild(createPara(`Urgency: ${urgency}`))
  article.appendChild(createPara(`Assigned to: ${team}`))
  article.appendChild(createPara(`Description: ${description}`))
  element.appendChild(article)

  const editBtn=document.createElement('button')
  editBtn.className='edit-btn'
  editBtn.textContent='Edit'
  editBtn.addEventListener('click',edit)

  const continueBtn=document.createElement('button')
  continueBtn.className='continue-btn'
  continueBtn.textContent='Continue'
  continueBtn.addEventListener('click',pendingListContinue)

  element.appendChild(editBtn)
  element.appendChild(continueBtn)

  previewList.appendChild(element)
  
}
 
function edit(){
  addBtn.disabled=false
  employeeInput.value=employee
  categoryInput.value=category
  urgencyInput.value=urgency
  teamInput.value=team
  descriptionInput.value=description

  previewList.innerHTML=''
}

function pendingListContinue(){
const element=previewList.querySelector('li')
element.className='problem-content'
pendingList.appendChild(element)

element.querySelector('.edit-btn').remove()
element.querySelector('.continue-btn').remove()

const resolvedBtn=document.createElement('button')
resolvedBtn.className='resolve-btn'
resolvedBtn.textContent='Resolved'
resolvedBtn.addEventListener('click',resolvedListCon)

element.appendChild(resolvedBtn)


}

function resolvedListCon(){
const element=pendingList.querySelector('li')
element.className='problem-content'
resolvedList.appendChild(element)

element.querySelector('.resolve-btn').remove()

const clearBtn=document.createElement('button')
clearBtn.className='clear-btn'
clearBtn.textContent='Clear'
clearBtn.addEventListener('click',function(){
  clear(element)
})

element.appendChild(clearBtn)


}

function clear(element){
  element.remove()
  addBtn.disabled=false

}


 function createPara(content) {
  const p = document.createElement('p')
  p.textContent = content
  return p
}
}


    
    
