export class Operacion {
  protected valorA: number;
  protected valorB: number;
  protected resultado: number;

  constructor() {
    this.valorA = 0;
    this.valorB = 0;
    this.resultado = 0;
  }

  set ValorA(value: number) {
    this.valorA = value;
  }

  set ValorB(value: number) {
    this.valorB = value;
  }

  get Resultado(): number {
    return this.resultado;
  }
}

export class Sumar extends Operacion {
  Sumar() {
    this.resultado = this.valorA + this.valorB;
  }
}

export class Restar extends Operacion {
  Restar() {
    this.resultado = this.valorA - this.valorB;
  }
}

export abstract class Forma {
  protected nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  setNombre(value: string) {
    this.nombre = value;
  }

  getNombre(): string {
    return this.nombre;
  }

  abstract perimetro(): number;
  abstract area(): number;
}

export class Circulo extends Forma {
  private radio: number;

  constructor(radio: number) {
    super("Circulo");
    this.radio = radio;
  }

  area(): number {
    return Math.PI * this.radio ** 2;
  }

  perimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}
