function subtract() {
    const fistNumberEl=document.getElementById('firstNumber').value
    const secondNumberEl=document.getElementById('secondNumber').value
    const resuldEl=document.getElementById('result')

    resuldEl.textContent=Number(fistNumberEl-secondNumberEl)

}