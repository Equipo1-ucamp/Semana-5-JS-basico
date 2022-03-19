var numOne = prompt("Ingresa tu primer numero");
var pickSign = prompt("Ingresa el signo de operacion(+,-,*,/)");
var numTwo = prompt("Ingresa tu segundo numero");

if (pickSign === "+") {
  alert(`El resultato es ${numOne + numTwo}.`);
} else if (pickSign === "-") {
  alert(`El resultado es ${numOne - numTwo}.`);
} else if (pickSign === "*") {
  alert(`El resultato es ${numOne * numTwo}.`);
} else if (pickSign === "/") {
  alert(`El resultato es ${numOne / numTwo}.`);
} else {
  alert("Something went wrong. Try it again.");
}
//Sasha