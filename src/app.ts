import { Sumar, Restar } from "./poo/poo.js";

let operacionSuma = new Sumar();
let operacionResta = new Restar();

// Suma
operacionSuma.ValorA = 110;
operacionSuma.ValorB = 25;

operacionSuma.Sumar();

// Resta
operacionResta.ValorA = 20;
operacionResta.ValorB = 34;

operacionResta.Restar();

console.log(`El resultado de la suma es: ${operacionSuma.Resultado}`);
console.log(`El resultado de la resta es: ${operacionResta.Resultado}`);
