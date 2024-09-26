function compararNumeros(a, b) {
  if (a > b){
    console.log(a)
  } else {
    console.log(b)
  }
}

function suma1a100() {
  let resultat = 0
  for(let i = 1; i <= 100; i++) {
    resultat += i
  }
  console.log("La suma del 1 al 100 es: ", resultat)
}

function PedraPaper() {
  for (let i = 1; i <= 20; i++ ) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("Tisores")
    }else if (i % 3 == 0) {
      console.log("Pedra")
    } else if (i % 5 == 0) {
      console.log("Paper")
    } else {
      console.log(i)
    }
    
  }
}

function esParell(num) {
  let result = false
  if (num % 2 == 0){
    result = true
  } else {
    result = false
  }

  console.log(`El número ${num} es parell: ${result}`)
}

function revertirCadena(cadena) {
  let cadenaRevertida = ""
  for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaRevertida += cadena[i]
  }
  console.log(`${cadena} al revés s'escriu ${cadenaRevertida}`)
}

function calcFactorial(n) {
  if(n == 0) return 1
  else return n * calcFactorial(n - 1)
}

function factorial(n){
  let result = calcFactorial(n)
  console.log(`El factorial de ${n} es ${result}`)
}

function filtrarPositius(array) {
  console.log(`Array original: ${array}`)
  let resultat = array.filter((num) => num > 0)
  console.log(`L'array filtrat es: ${resultat}`)
}
// TODO ---------------------------------------------------------------------------------------------

function afegirTasca() {
  let { $input, $tasques } = gatherDomElements()
  let  { $container, $button, $tasca } = createDomElements()

  if ($input.value === '') return

  $button.textContent = "Eliminar"
  $button.addEventListener("click", () => {
    $container.remove()
  })
  $tasca.innerHTML = $input.value

  $container.appendChild($tasca)
  $container.appendChild($button)
  $tasques.appendChild($container)

  $input.value = ""
  applyStyles($container)

  document.querySelector("input").focus()
}

function gatherDomElements() {
  let $input = document.querySelector("input")
  let $tasques = document.getElementById("tasques")
  return { $input, $tasques }
}

function createDomElements() {
  let $container = document.createElement("li")
  let $button = document.createElement("button")
  let $tasca = document.createElement("span")

  return { $container, $button, $tasca }
}

function applyStyles(element){
  element.style.display = "flex"
  element.style.width = "300px"
  element.style.justifyContent = "space-evenly"
  element.style.listStyle = "none"
}

