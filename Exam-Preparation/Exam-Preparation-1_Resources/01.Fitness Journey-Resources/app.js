window.addEventListener('load', solve);

function solve() {

    const nextBtn = document.querySelector('#next-btn')
    nextBtn.addEventListener('click', readInput)

    //Card Panel
    const previe = document.querySelector('.class-info')
    const confirmPanel = document.querySelector('.confirm-class')



    //Input Fields
    const nameInput = document.querySelector('#name')
    const emailInput = document.querySelector('#email')
    const contactNumberInput = document.querySelector('#contact-number')
    const classTypuInput = document.querySelector('#class-type')
    const timeInput = document.querySelector('#class-time')

    let name;
    let email;
    let contactNumber;
    let classTypu;
    let time;



    function readInput(event) {

        event.preventDefault()

        name = nameInput.value
         email = emailInput.value
         contactNumber = contactNumberInput.value
         classTypu = classTypuInput.value
         time = timeInput.value


        if (name == '' || email == '' || contactNumber == '' || classTypu == '' || time == '') {
            return
        }

        nextBtn.disabled = true
        nameInput.value = ''
        emailInput.value = ''
        contactNumberInput.value = ''
        classTypuInput.value = ''
        timeInput.value = ''

        createPreview(name, email, contactNumber, classTypu, time)
    }

    function createPreview(name, email, contactNumber, classTypu, time) {
        const elemnt = document.createElement('li')
        elemnt.className = 'info-item'
        const article = document.createElement('article')
        article.className = 'personal-info'
        article.appendChild(createPara(`form: ${name}`))
        article.appendChild(createPara(`text: ${email}`))
        article.appendChild(createPara(contactNumber))
        article.appendChild(createPara(classTypu))
        article.appendChild(createPara(time))
        elemnt.appendChild(article)

        const editBtn = document.createElement('button')
        editBtn.className = 'edit-btn'
        editBtn.textContent = 'Edit'
        editBtn.addEventListener('click',edit)

        const continueBtn = document.createElement('button')
        continueBtn.className = 'continue-btn'
        continueBtn.textContent = 'Continue'
        continueBtn.addEventListener('click',continueWithPreview)

        elemnt.appendChild(editBtn)
        elemnt.appendChild(continueBtn)

        previe.appendChild(elemnt)
    }

    function edit() {
        nextBtn.disabled = false
        nameInput.value = name
        emailInput.value = email
        contactNumberInput.value = contactNumber
        classTypuInput.value = classTypu
        timeInput.value = time

        previe.innerHTML=''
    }

function continueWithPreview(){
    const element=previe.querySelector('li')
    element.className='continue-info'
    confirmPanel.appendChild(element)

    element.querySelector('.edit-btn').remove()
    element.querySelector('.continue-btn').remove()

    const cancelBtn = document.createElement('button')
        cancelBtn.className = 'cancel-btn'
        cancelBtn.textContent = 'Cancel'
        cancelBtn.addEventListener('click',cancel)

        const confirmBtn = document.createElement('button')
        confirmBtn.className = 'confirm-btn'
        confirmBtn.textContent = 'Confirm'
        confirmBtn.addEventListener('click',confirmAction)

        element.appendChild(cancelBtn)
        element.appendChild(confirmBtn)

}

function cancel(){
nextBtn.disabled=false
confirmPanel.innerHTML=''
}

function confirmAction(){
document.getElementById('main').remove()


const thankYou=document.createElement('h1')
thankYou.id='thank-you'
thankYou.textContent="Thank youfor scheduling your appointment, we look forward to seeing you!"


const doneBtn=document.createElement('button')
doneBtn.id='done-btn'
doneBtn.textContent="Done"
doneBtn.addEventListener('click',()=>{
    window.location=window.location
})

document.body.appendChild(thankYou)
document.body.appendChild(doneBtn)
}

    function createPara(content) {
        const p = document.createElement('p')
        p.textContent = content
        return p
    }

}




