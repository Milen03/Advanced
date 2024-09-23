function toggle() {
    const btnEl=document.querySelector('.button')
const extraEl=document.querySelector('#extra')

const initiaDisplay=extraEl.style.display

console.log(initiaDisplay);

if(initiaDisplay=='block'){
    extraEl.style.display="none"
    btnEl.textContent="More"
}else{
    extraEl.style.display="block"
    btnEl.textContent="Less"
}
}