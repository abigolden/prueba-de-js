const operador1 = document.getElementById("op1");
const operadormedio = document.getElementById("operador");
const operador2 = document.getElementById("op2");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

function calculador() {
  const operacion = operadormedio.value;
  const op1 = parseFloat(operador1.value);
  const op2 = parseFloat(operador2.value);
  
  const operadorEsValido = operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/"
  if (operadorEsValido) {
    const resultadoFinal = ejecutarOperacion(operacion, op1, op2)
    resultado.innerText = "=" + resultadoFinal;
   } else {
    resultado.innerText = "calculo imposible"
  }
}

function ejecutarOperacion(operacion, op1, op2) {
  let resultadoFinal;
  switch (operacion) {
    case "+":
      resultadoFinal = sumar(op1,op2)
      return resultadoFinal
    case "-":
      return restar(op1,op2); 
    case "*":
      resultadoFinal = op1 * op2;
      return resultadoFinal;
    case "/":
      resultadoFinal = op1 / op2;
      return resultadoFinal;
  }
}

function sumar(numero1, numero2) {
  let operacion = numero1 + numero2
  return operacion
}
function restar(numero1, numero2) {
  return numero1 - numero2
}