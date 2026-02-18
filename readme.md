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
class Persona {
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

### Decoradores de Clase

Los **decoradores** permiten añadir anotaciones y metadatos o incluso cambiar el comportamiento de clases, propiedades, métodos y parámetros.

En los **decoradores** se puede pasar parametros en caso de que se necesite

```ts
function DecoradorPersona(target: function) {
  console.log(target);
}

@DecoradorPersona
class Persona {
  constructor() {}
}
```

### Instancias

Para la manipulación de objetos o instancias de las clases, se utilizan variables.

Estás variables tienen una semantica propia, la cual se diferencia de los tipos básicos.

El uso del operador **NEW** nos permite instanciar un nuevo objeto

```ts
let persona = new Persona();
```

Existen tres formas de inicializar un objeto.

- Por referencia a variables

```ts
persona.apellido = "Monteabaro";
persona.nombre = "Gadiel";
```

- Por medio del constructor

```ts
let persona = new Persona("Gadiel", "Monteabaro");
```

- Por medio del a propiedad Setter

```ts
let persona = new Persona();
persona.Apellido = "Monteabaro";
persona.Nombre = "Gadiel";
```

#### Recomendaciones

- Evitar lineas de longitud de mas de 80 caracteres
- Indentar los bloques de código
- Utilizar identificadores nemotécnicos
- Los identificadores de clases, módulos, interfaces y enumertaciones con **PascalCase**
- Los identificadores de objetos, métodos, instancias, constantes y proppiedades de los objetos deberán usar **camelCase**.
- Utilizar comentarios sin la necesidad de exagerar.

## Fundamentos del enfoque orientado a objetos

### Principios del desarrollo orientado a objetos

- Jerarquías (herencias, agregación y composición)
- Abtracción
- Encapsulamiento
- Modularidad

Otras (No Fundamentales)

- Polimorfismo
- Tipificación
- Concurrencia
- Persistencia

### Jerarquías

La relación entre clases es muy importante, de manera tal que puedan compartir atributos y métodos sin necesidad de volver a escribirlos.

Esto permite extender y reutilizar el código sin tener que volver a escribirlo.

#### Herencia

La herencia es un mecanismo donde se puede degfinir una nueva **clase B** en términos de otra **clase A**.

Indicamos que la **clase B** hereda (o deriva) desde la **clase A**, haciendo que _B_ incluya todos los miembros de _A_ como propios.

Estos elementos podrán ser accesidos dependiendo del modificador de acceso [ public , private, protected, "deafult"]

La herencia permite definir un nuevos objeto a partir de otros, agregando las diferencias entre ellos (_Programación diferencial_)

Cuando B (_Sub clases_) hereda de la A (_Super Clase_), se dice que hay una relación de **Herencia**.

- Diagrama UML
  - En UML se diagrama con una flecha continua terminada en punta cerrada.
  - La flecha parte de la nueva clase _B_ y termina en la clase desde la cual se hereda _A_.

- _Herencia Simple_

  En la **herencia simple**, una clase puede tener una y sólo una superclase directa.

- _Herencia Múltiple_

  En la **herencia múltiple**, una clase puede tener tantas superclases directas como se desee.

  No todos los lenguajes permiten la herencia multiple, es dificil de controlar a nivel de lenguaje y en general se acepta que la _herencia múltiple_ lleva a diseños mas complejos que se podria obtener usando sólo _herencia simple_.

#### Agregación y Composición

Las jerarquias de agregación y composición son asociaciones entre las clases del tipo **"Es parte de"**.

- Diagrama UML
  - En UML el diamante relleno representa la **composición** y el diamante vacío la **agregación**.
  - El diamante va ubicado del lado de la **Super clase**.

### Abstracción

Una abstracción denota las caracteristicas esenciales de un objeto (_datos y operaciones_) que lo distingue de otras clases de objetos.

Decidir el conjunto de abstracciones correcto de un determinado dominio, es el problema central del **diseño orientado a objetos**.

Nos centramos en la visión externa de un objeto, lo cual nose permite separar el comportamiento esencial de un objeto de su implementación.

Los mecanismos de abstracción en **EOO**:

- _Generalización_

  Es un mecanismos el cual un conjunto de clases de objetos son agrupados en un clase de nivel superior.
  - La **Super Clase** almacena datos generales de las clases.
  - Las **Subclases** almacenan datos particulares.

- _Especialización_

  Contrario a la **generalización**. Una clase **Medico** es una especialización de la clase **Persona**, a su vez, la clase **Persona** es una generalización de la superclase **Medico**

- _Agregación_

  Es un mecanismo por el cual una clase de objeto es definida a partir de sus partes (otras clases de objetos). Por ejemplo un computador que puede descomponerse en CPU, ULA, la memoria y los dispositivos de entrada.

- _Clasificación_

  Consiste en definir una clase a partir de un conjunto de objetos que tienen comportamiento similar.

  La ejemplificación es lo contrario, corresponde a la instancia de una clase.

  La clasificación es el medio por el que ordenamos el conocimiento ubicado en las abstracciones.

### Encapsulamiento

El **encapsulamiento**es la propiedad que permite ocultar los detalles de implementación del objeto, mostrando solo lo relevante.

Esta parte de código pertenece a la parte privada de la clase y no puede ser accedida desde ningún otro lugar.

El tambien conocido _Principio de ocultamiento_ dice que solo los métodos de una clase deberían de tener acceso directo a los atributos de esa clase, para impedir que un atributo sea modifiado en forma insegura o no controlada por la propia clase.

El _Principio de ocultamiento_ es la causa por la cual los atributos se declaran como privados, y los métodos como públicos.

```ts
class Persona {
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

### Modularidad

La modularidad permite independencia entre las diferentes partes del sistema.

Lo que cosnsite en dividir un programa en módulos o partes, que pueden ser compilados separadament, pero que tienen conexiones con otros módulos.

En un mismo modulo se suele colocar clases y objetos que guarden estrecha relación.

Esto está relacionado con el ocultamiento de la información.
