window.addEventListener('load', solve);

function solve() {
    const nextBtn = document.querySelector('#next-btn')
    nextBtn.addEventListener('click', readInput)

    //Cart Panel
    const info = document.querySelector('.info-list')
    const confirmLisnt = document.querySelector('.confirm-list')
    const h1=document.querySelector('#status')
    h1.addEventListener('click',()=>{
        window.location=window.location
    })

    //Input Fields
    const firstNameInput = document.querySelector('#first-name')
    const lastNameInput = document.querySelector('#last-name')
    const fromDateInput = document.querySelector('#from-date')
    const toDateInput = document.querySelector('#to-date')

    let firstName;
    let lastName;
    let fromDate;
    let toDate;

    


    function readInput(event) {
        event.preventDefault()

        firstName = firstNameInput.value
        lastName = lastNameInput.value
        fromDate = fromDateInput.value
        toDate = toDateInput.value

        if (firstName == '' || lastName == '' || fromDate == '' || toDate == '') {
            return
        }

        if (fromDate > toDate) {
            return
        }

        nextBtn.disabled = true
        firstName.value = ''
        lastName.value = ''
        fromDate.value = ''
        toDate.value = ''

        createInfo(firstName, lastName, fromDate, toDate)

    }

    function createInfo(firstName, lastName, fromDate, toDate) {
        const element = document.createElement('li')
        element.className = 'vacation-content'
        const article = document.createElement('article')

        article.appendChild(createHeading(`Name: ${firstName} ${lastName}`))
        article.appendChild(createPara(`From date: ${fromDate}`))
        article.appendChild(createPara(`To date: ${toDate}`))
        element.appendChild(article)

        const editBtn = document.createElement('button')
        editBtn.className = 'edit-btn'
        editBtn.textContent = 'Edit'
        editBtn.addEventListener('click',edit)

        element.appendChild(editBtn)


        const continueBtn = document.createElement('button')
        continueBtn.className = 'continue-btn'
        continueBtn.textContent = 'Continue'
        continueBtn.addEventListener('click',continueWithPreview)

        element.appendChild(continueBtn)

        info.appendChild(element)
    }

function edit(){
    nextBtn.disabled = false

    firstNameInput.value=firstName
    lastNameInput.value=lastName
    fromDateInput.value=fromDate
    toDateInput.value=toDate

    info.innerHTML=''
}




function continueWithPreview(){
const element=info.querySelector('li')
element.className='vacation-content'

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

confirmLisnt.appendChild(element)
}


function cancel(){
    confirmLisnt.querySelector('li').remove()
    nextBtn.disabled=false
h1.className='vacation-cancelled'
h1.textContent='Cancelled Vacation'
    
}


function confirmAction(){
    confirmLisnt.querySelector('li').remove()
    nextBtn.disabled=false

    h1.className='vacation-confirmed'
h1.textContent='Vacation Requested'

   
}

    function createPara(content) {
        const p = document.createElement('p')
        p.textContent = content
        return p
    }

    function createHeading(content) {
        const h3 = document.createElement('h3')
        h3.textContent = content
        return h3

    }
}




