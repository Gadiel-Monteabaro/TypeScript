import { Circulo } from "./poo/poo.js";

let circulo = new Circulo(5);

console.log(circulo.getNombre());
console.log(`Área: `, circulo.area().toFixed(2));
console.log(`Perímetro: `, circulo.perimetro().toFixed(2));
