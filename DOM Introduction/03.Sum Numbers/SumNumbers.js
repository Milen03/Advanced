function calc() {
    // TODO: sum = num1 + num2
    let a=document.getElementById("num1")
    let b =document.getElementById("num2")
    const output=document.getElementById('sum')

    const sum=Number(a.value)+Number(b.value)
    output.value=sum
}
