function colorize() {
    // TODO
    const rows=document.querySelectorAll('tr:nth-child(even)')

    for (let row of rows){
        row.style.backgroundColor='teal'
    }

}