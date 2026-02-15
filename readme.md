# Paradigmas de Programación

## Programación Estructurada

La programación estructurada se basa en descomponer procesos en subprocesos más pequeños, programando cada uno como una función o procedimiento.

Este enfoque funciona correctamente en sistemas pequeños o medianos. Sin embargo, cuando el sistema crece o aumenta su complejidad, se vuelve más difícil de mantener y modificar, ya que las funciones pueden generar muchas dependencias entre sí.

---

## Programación Orientada a Objetos (POO)

La Programación Orientada a Objetos (POO) propone una nueva forma de abordar los problemas.

Su objetivo principal es identificar los actores del problema, es decir, las entidades u objetos que aparecen en el dominio del sistema. Cada objeto combina datos (atributos) y comportamientos (métodos).

### Ventajas de la POO

- Permite modelar los problemas de forma más natural.
- Facilita el manejo de la complejidad.
- Hace que los sistemas sean más fáciles de mantener y extender.
- Es adecuada para entornos con interfaces gráficas (GUI).
- Fomenta la reutilización del código.
- Aumenta la productividad y la confiabilidad del software.

### Objetos

En Programación Orientada a Objetos (POO), un `objeto` es una entidad que combina **estado** y **comportamiento**.

El **estado** está representado por sus atributos, que son las características que describen e identifican a cada objeto.

El **comportamiento** está definido por sus métodos, que son las acciones u operaciones que el objeto puede realizar.

En pocas palabras:
Un objeto tiene atributos (lo que es) y tiene métodos (lo que hace).

### Clases

Una `clase` es la descripción de una **entidad** u **objeto**, puede utilizarse como plantilla para crear muchos objetos que respondan a dicha descripción.

Los objetos creados a partir de la clase se denominan **instancias de clase**.

La clase es única y describe la forma y el comportamiento de los muchos objetos de esa clase.

### Características

- Poseen un alto nivel de abstracción.
- Se relacionan entre sí mediante jerarquías.
- Los nombres de las clases deben estar en singular.

### Relación entre clases y objetos

Las `clases` son descripciones estáticas o plantillas que describen objetos.

Su rol es definir nuevos tipos conformados por atributos y operaciones. Es decir, las clases son un especie de molde de fábrica, la cual son contruidos los objetos.

Los `objetos` por su parte son instancias de una **clase**, lo cual, durante la ejecución de un programa sólo existen los **objetos**.

## Clases

En TypeScript una clase es representada atravez de una secuencia de simbolos, que forma lo que se denomina como código fuente de la clase.

Esta secuencia es correcta cuando se cumple su **Sintaxis** y **Semántica**.

Las reglas semanticas nos posibilitan detectar errores de interpretación que no permiten que las acciones o instrucciones puedan ser ejecutadas.

```ts
class Persona {
  readonly nombre: string;
  readonly apellido: string;

  private añoNac: number;

  constructor(nombre: string, apellido: string, añoNac: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.añoNac = añoNac;
  }

  public toString(): string {
    return this.nombre + this.apellido;
  }

  public edad(añoActual: number): number {
    return añoActual - this.añoNac;
  }
}
```

### Atributos

Los **Atributos** son variables que se declaran dentro de la clase, y sirven para indicar la forma o características de cada objeto representado por esa clase.

Los **Atributos**, muestran lo que cada objeto es, o también, lo que cada objeto tiene.

```ts
class Persona {
  // Atributos de la clase persona
  nombre: string;
  apellido: string;
  añoActual: number;
}
```

### Métodos

Los **Métodos** son funciones, procedimientos o rutinas declaradas dentro de la clase. Estos describen el comportamiento o las acciones de los objetos descriptos por esa clase.

```ts
class Persona {
  public edad(añoActual: number): number {
    return añoActual - this.añoNac;
  }
}
```

Dentro de las instrucciones se puede acceder a los miembros definidos en la clase, a la cual pertenece el método.

En caso de que un método no devuelva objeto alguno se omite la cláusula y se especifica como **void**.

### Constructores

Es un método especial que permite instanciar un objeto.

```ts
class Persona {
  constructor(nombre: string, apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
```

Este código suele usarse para la inicialización de los atributos del objeto a crear.

### Getters y Setters

Estas propiedades proporcionan la comodidad de los miembros de datos públicos sin los riesgos que provienen del accesos sin comprobar, sin controlar y sin proteger a los datos del objeto.

```ts
class Persona {
  constructor(nombre: string, apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  get Nombre(): string {
    return this.nombre;
  }

  set Nombre(nombre: string) {
    this.nombre = nombre;
  }

  get Apellido(): string {
    return this.Apellido;
  }

  set Apellido(apellido: string) {
    this.apellido = apellido;
  }
}
```

### Modificadores de acceso

Los programas orientados a objetos proveen de una forma que obliga a respetar el Principio de Ocultamiento.

Son palabras reservadas que se colocan delante de la declaración de un atributo método de una clase.

Hacen que ese atributo o métodotengan accesibilidad más amplia o menos amplia dentro del programa.

Los modificadores de acceso;

- Public
  - Un miembro público es accesible tanto desde el interior de la clase, como desde el exterior de la misma.

- Private
  - Sólo es accesible desde el interior de la propia clase, usando sus propios métodos.

- Readonly
  - El acceso es de solo lectura.

- Protected
  - Aplicado en contextos de herencia, hace que un miembro sea público para sus clases derivadas y para clases en el mismo paquete, pero privados para el resto.

```ts
class Personal {
  private nombre: string;
  private apellido: string;

  constructor(nombre: string, apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  get Nombre(): string {
    return this.nombre;
  }

  set Nombre(nombre: string) {
    this.nombre = nombre;
  }

  get Apellido(): string {
    return this.Apellido;
  }

  set Apellido(apellido: string) {
    this.apellido = apellido;
  }
}
```
