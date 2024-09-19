function extractText() {
    let input=document.getElementById("items")
    let output=document.getElementById("result")

    const resuld=[]
    for(let items of input.children){
        resuld.push(items.textContent)
    }
    output.textContent=resuld.join('\n')
}