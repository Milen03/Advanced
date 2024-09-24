function attachGradientEvents() {
    const box=document.getElementById('gradient')
    const output=document.getElementById('result')
    box.addEventListener('mousemove',onMove)

    function onMove(event){
        const offset=Math.floor(event.offsetX/box.clientWidth*100)+'%'
        output.textContent=offset
    }
}