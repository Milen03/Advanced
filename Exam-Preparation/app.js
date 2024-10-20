window.addEventListener("load", solve);

function solve() {
  const addActivity=document.querySelector('#add-activity')
  addActivity.addEventListener('click',readInput)

  //Cart panel
  const previewActivity=document.querySelector('#preview-activity')
  const activitiesTable=document.querySelector('#activities-table')

  //Input Fields
  const typeInput=document.querySelector('#type')
  const intensityInput=document.querySelector('#intensity')
  const caloriesInput=document.querySelector('#calories')
  const durationInput=document.querySelector('#duration')
  const dateInput=document.querySelector('#date')


  let type;
  let intensity;
  let calories;
  let duration;
  let date;


  function readInput(event){
    event.preventDefault()
    
    type=typeInput.value
    intensity=intensityInput.value
    calories=caloriesInput.value
    duration=durationInput.value
    date=dateInput.value

    if(type==''||intensity==''||calories==''||duration==''||date==''){
      return
    }
    addActivity.disabled = true

    clearInputs()
    
    createPreview(type,intensity,duration,date,calories)
  }

  function createPreview(type,intensity,duration,date,calories){
    const elemen=document.createElement('li')
    const article = document.createElement('article')
    article.appendChild(createPara(`Activity: ${type}`))
    article.appendChild(createPara(`Intensity: ${intensity}`))
    article.appendChild(createPara(`Duration: ${duration}`))
    article.appendChild(createPara(`Date: ${date}`))
    article.appendChild(createPara(`Calories: ${calories}`))
    elemen.appendChild(article)

    const divBtn=document.createElement('div')
    divBtn.className='btn-container'
    elemen.appendChild(divBtn)

    const editBtn = document.createElement('button')
        editBtn.className = 'edit-btn'
        editBtn.textContent = 'Edit'
        editBtn.addEventListener('click',edit)
divBtn.appendChild(editBtn)

const nextBtn=document.createElement('button')
nextBtn.className='next-btn'
nextBtn.textContent='Next'
divBtn.appendChild(nextBtn)
nextBtn.addEventListener('click',activitiesTableCon)

previewActivity.appendChild(elemen)


  }

function edit(){
addActivity.disabled=false
typeInput.value=type
intensityInput.value=intensity
durationInput.value=duration
dateInput.value=date
caloriesInput.value=calories

previewActivity.innerHTML=''
}
function activitiesTableCon(){
  previewActivity.querySelector('li').remove()
const trElnt=document.createElement('tr')

const tdTypeCell=document.createElement('td')
tdTypeCell.className='type-cell'
tdTypeCell.textContent=type
trElnt.appendChild(tdTypeCell)

const tdDura=document.createElement('td')
tdDura.className='duration-cell'
tdDura.textContent=duration
trElnt.appendChild(tdDura)

const tdCalori=document.createElement('td')
tdCalori.className='calories-cell'
tdCalori.textContent=calories
trElnt.appendChild(tdCalori)

const tdInten=document.createElement('td')
tdInten.className='intensity-cell'
tdInten.textContent=intensity
trElnt.appendChild(tdInten)

const tdDate=document.createElement('td')
tdDate.className='date-cell'
tdDate.textContent=date
trElnt.appendChild(tdDate)

const tdBtn=document.createElement('td')
tdBtn.className='btn-cell'
trElnt.appendChild(tdBtn)



const deleteBtn=document.createElement('button')
deleteBtn.className='delete-btn'
deleteBtn.textContent='Delete'
deleteBtn.addEventListener('click',deleteTable)
tdBtn.appendChild(deleteBtn)

activitiesTable.appendChild(trElnt);
addActivity.disabled=false
}

function deleteTable(){
  activitiesTable.querySelector('tr').remove()
}

  function createPara(content) {
    const p = document.createElement('p')
    p.textContent = content
    return p

    
}
function clearInputs() {
  typeInput.value = '';
  intensityInput.value = '';
  caloriesInput.value = '';
  durationInput.value = '';
  dateInput.value = '';
}
}
