let message: string = "Hola Mundo";
let userName: string = "Gadiel";

function saludar(message: string) {
  return message;
}

// console.log(saludar(message));
// console.log(saludar(userName));

function saludo(): string {
  return "¡Hola Gadiel!";
}

// console.log(saludo());

let edadMujer = 18;

function presentarse(
  messageNegative: string,
  messageConfirm: string = `Mi nombre es ${userName}.`,
): string {
  if (edadMujer >= 21) {
    return messageConfirm;
  } else {
    return messageNegative;
  }
}

// console.log(presentarse("No quiero presentarme con vos"));

let arrNums: number[] = [5, 4, 87, 4, 6, 22, 44, 8, 71];
function sumatoria(...nums: number[]) {
  let i: number;
  let sum: number = 0;

  for (i = 0; i < nums.length; i++) {
    sum += nums[i]!;
  }

  //   for (const num of nums) {
  //     sum += num;
  //   }

  return sum;
}
// console.log(sumatoria(...arrNums));

// Parametros opcionales
/*
  Un parametro se puede marcar como opcional agregando el signo de interrogación al nombre
*/
function obtenerDatosPersonales(id: number, nombre: string, mail?: string) {
  let datos = {
    id: id,
    nombre: nombre,
    mail: mail,
  };

  if (datos.mail === undefined) {
    console.log(`Hola ${datos.nombre}, tu mail no está registrado.`);
  }

  return datos;
}

console.log(obtenerDatosPersonales(39, "Gadiel", "correo@correo.com"));
console.log(obtenerDatosPersonales(62, "Monteabaro"));
