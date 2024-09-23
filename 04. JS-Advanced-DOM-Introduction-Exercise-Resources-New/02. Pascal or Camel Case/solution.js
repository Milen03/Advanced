function solve() {
  const input = document.getElementById('text').value.toLowerCase().split(' ')
  const convencion = document.getElementById('naming-convention').value.toLowerCase()

  const resuldEl = document.getElementById('result')

  if (input == '' || convencion == '') return

  let resuld = ''

  if (convencion == 'camel case') {
    console.log(input.slice(1));
    
    resuld = input[0] + input.slice(1).map((word) => word[0].toUpperCase() + word.slice(1)).join('')


  } else if (convencion == 'pascal case') {

    resuld = input.map((word) => word[0].toUpperCase() + word.slice(1)).join('')


  } else {
    resuld='Error!'
  }
  resuldEl.textContent = resuld
}