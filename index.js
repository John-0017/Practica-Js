// Operaciones
const Operacion = prompt('ingresa las operaciones que deseas realizar: +,-,*,/,%');
const valor1 = parseInt(prompt('ingresa un valor'));
const valor2 = parseInt(prompt('ingresa un valor'));
// que el usuario elija la operacion

const suma  = valor1 + valor2;
const resta = valor1 - valor2;
const multiplicacion = valor1 * valor2;
const division = valor1 / valor2;
const modulo = valor1 % valor2;
if (Operacion === '+')  {
    alert(+ suma);
}  else if ( Operacion === '-') {
     alert( + valor1 - valor2);
}  else if ( Operacion === '*') {
     alert( + valor1 * valor2);
}  else if (Operacion === '/') {
     alert ( + valor1 / valor2);
}  else if (Operacion === '%') {
     alert ( + valor1 % valor2);
}  else {
    alert('operacion no valida'); 
}
