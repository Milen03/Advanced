window.addEventListener("load", solve);

function solve() {
  const testRideBtn = document.querySelector('#test-ride-btn')
  testRideBtn.addEventListener('click', readInput)

  // Card Panel
  const previewList = document.querySelector('#preview-list')
  const completeList = document.querySelector('#complete-list')
  const dataView = document.querySelector('.data-view')

  // Input Fields
  const colorsInput = document.querySelector('#colors')
  const motorcyclesInput = document.querySelector('#motorcycles')
  const datetimeInput = document.querySelector('#datetime')
  const fullNameInput = document.querySelector('#full-name')
  const emailInput = document.querySelector('#email')

  let colors;
  let motorcycles;
  let datetime;
  let fullName;
  let email;

  function readInput(event) {
    event.preventDefault()

    colors = colorsInput.value
    motorcycles = motorcyclesInput.value
    datetime = datetimeInput.value
    fullName = fullNameInput.value
    email = emailInput.value

    if (colors === '' || motorcycles === '' || datetime === '' || fullName === '' || email === '') {
      return
    }

    testRideBtn.disabled = true
    colorsInput.value = ''
    motorcyclesInput.value = ''
    datetimeInput.value = ''
    fullNameInput.value = ''
    emailInput.value = ''

    createPreviewList(colors, motorcycles, fullName, email, datetime)

  }

  function createPreviewList(colors, motorcycles, fullName, email, datetime) {
    const elemnt = document.createElement('li')
    const article = document.createElement('article')
    article.appendChild(createPara(`Color: ${colors}`))
    article.appendChild(createPara(`Model: ${motorcycles}`))
    article.appendChild(createPara(`For: ${fullName}`))
    article.appendChild(createPara(`Contact: ${email}`))
    article.appendChild(createPara(`Test Ride On: ${datetime}`))
    elemnt.appendChild(article)

    const divBtn = document.createElement('div')
    divBtn.className = 'btn-container'
    elemnt.appendChild(divBtn)

    const editBtn = document.createElement('button')
    editBtn.className = 'edit-btn'
    editBtn.textContent = 'Edit'
    editBtn.addEventListener('click', edit)

    divBtn.appendChild(editBtn)

    const nextBtn = document.createElement('button')
    nextBtn.className = 'next-btn'
    nextBtn.textContent = 'Next'
    nextBtn.addEventListener('click', nextCompleteList)

    divBtn.appendChild(nextBtn)

    previewList.appendChild(elemnt)
  }


  function edit() {
    testRideBtn.disabled = false
    colorsInput.value = colors
    emailInput.value = email
    fullNameInput.value = fullName
    datetimeInput.value = datetime
    motorcyclesInput.value = motorcycles

    previewList.innerHTML = ''
  }

  function nextCompleteList() {
    const elemnt = previewList.querySelector('li')
    completeList.appendChild(elemnt)

    elemnt.querySelector('.btn-container').remove()

    const article2 = elemnt.querySelector('article')

    const completeBtn = document.createElement('button')
    completeBtn.className = 'complete-btn'
    completeBtn.textContent = 'Complete'
    completeBtn.addEventListener('click', confirmAction)


    article2.appendChild(completeBtn)

  }

  function confirmAction() {
    completeList.querySelector('li').remove()

    const yourTestRide = document.createElement('button')
    yourTestRide.className = 'confirm-btn'
    yourTestRide.textContent = 'Your Test Ride is Confirmed" button'
    yourTestRide.addEventListener('click', () => {
      window.location = window.location
    })
    dataView.appendChild(yourTestRide)
  }


  function createPara(content) {
    const p = document.createElement('p')
    p.textContent = content
    return p
  }
}
