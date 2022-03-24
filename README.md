# POO en JavaScript

*Curso Intermedio* por ***Juan David Castro*** - *Platzi 2022*

Explora cómo funcionan los objetos en JavaScript a profundidad. Descubre cómo copiar, identificar y encapsular elementos con objetos literales, prototipos o clases. Comprende cómo funciona la memoria de los navegadores web y cómo aprovechar el sistema de herencia en objetos con la propiedad proto. 

- Copia objetos de JavaScript con shallow y deep copy
- Comprende cómo funciona la memoria en JavaScript
- Pon en práctica los métodos estáticos de Object
- Aplica el paradigma orientado a objetos sin clases ni prototipos

## Introducción

### 1. ¿Qué hay dentro de los objetos en JavaScript?

Requisitos:

- Closure y Scope
- Fundamentos POO
- POO básico en JS

## Profundicemos en Objetos

 ### 2. Static: atributos y métodos estáticos en JavaScript

Hasta ahora habíamos aprendido que apara acceder a los métodos o atributos de una clase o prototipo teníamos que crear una instancia del prototipo(Objeto). Pero hay una forma de que podemos saltarnos tener que crear una instancia del prototipo para acceder a los métodos o atributos, esta es la forma **Static**

Para crear atributos estáticos los cuales podamos acceder sin crear un objeto o una instancia de este prototipo, solo hay que agregar al atributo la palabra `static`

```js
class Animal {
    static sound = 'croack!';
}
//acceder al atributo sin crear una instancia
console.log(animal.sound);
//croack!
```

De la misma forma podemos hacer con los métodos:

```js
class Animal {
    static makeSound(){
        return 'croack!';
    }
}
//acceder al método
console.log(Animal.makeSound());
//croack!
```

#### Métodos estáticos del prototipo Object

Tenemos el objeto *person*, el cual tiene atributos, haciendo uso de los métodos estáticos de **Object** podemos acceder a los atributos de nuestro objeto *person*:

```js
const person = {
    name: 'Tim',
    email: 'tim@mail.com',
    age: 18,
}
```

`Object.keys()`

Nos devuelve un array con los nombres clave de nuestro objeto.

```js
Object.keys(person);
//["name", "email", "age"]
```

`Object.values()`

Podemos acceder a los valores de los atributos

```js
Object.values(person);
//["Tim", "tim@mail.com", 18]
```



`Object.getOwnPropertyNames()`

También devuelve un array de los nombres clave.

```js
Object.getOwnPropertyNames(person);
//["name", "email", "age"]
```

`Object.entries()`

Nos devuelve un array que contiene arrays por cada uno de los atributos, que contiene la clave y el valor del atributo.

```js
Object.entries(person);
/*
[
	0: (2) ['name', 'Tim'],
	1: (2) ['email', 'tim@mail.com'],
	2: (2) ['age', 18]
]
*/
```

`Object.getOwnPropertyDescriptors()`

Nos devuelve un objeto, el cual contiene un objeto por cada atributo, este objeto nos describe al atributo con su valor y otras características adicionales.

```js
Object.getOwnPropertyDescriptors(person);
/*
{
    age: {
        value: 18, 
        writable: true, 
        enumerable: true, 
        configurable: true
    },
    email: {
        value: 'tim@mail.com', 
        writable: true, 
        enumerable: true, 
        configurable: true
    },
    name: {
    	value: 'Tim', 
    	writable: true, 
    	enumerable: true, 
    	configurable: true
    	}
}
*/

```

#### Encapsulamiento

Si recordamos del curso anterior, el objetivo del encapsulamiento es limitiar quien puede modificar, acceder o ejecutar nuestros metodos o atributos de la clase o prototipo.

Ahora con las propiedades **writable, configurable, enumerable** podemos limitar quien tiene acceso, modificar nuestros objetos.

 ### 3. Métodos estáticos del prototipo Object

Al “desconponer” el objeto con Object.entries y al producir una array de arrays con los atributos y metodos del objeto, el ambito lexico cambia y por ende la palabra reservada **this** funciona en un contexto diferente al inicial.

```js
const juan = {
    name: 'Juan',
    age: 18,
    approvedCourses: ['Java', 'JavaScript'],
    addCourse(newCourse){
        console.log('This: ', this);
        console.log(this.approvedCourses);
        this.approvedCourses.push(newCourse);
    },
};

console.log(Object.keys(juan));
console.log(Object.values(juan));
console.log(Object.getOwnPropertyNames(juan));
//Si tratamos de acceder al método addCourse usando entries
//Nos dará error, ya que en ese caso this.approvedCourses
//Ya no hace referencia a juan, sino al array que contiene los entries
console.log(Object.entries(juan));
juan.addCourse('GoLang');
//este código no funcionará
//this.approvedCourses será undefined
Object.entries(juan)[3][1]('PHP');


console.log(Object.getOwnPropertyDescriptors(juan));

//Object.defineProperty(obj, prop, descriptor)
//obj, es el objeto sobre el cual se define la propiedad
//prop, nombre de la propiedad definida o modificada
//descriptor, es de la propiedad que esta siendo definida
Object.defineProperty(juan, 'pruebaNasa', {
    value: 'Extraterrestres',
    enumerable: true,
    writable: true,
    configurable: true,
});

console.log(Object.getOwnPropertyDescriptors(juan));
```

> Mas información sobre Object: [Object MDN Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

 ### 4. Object.defineProperty

## Cómo copiar objetos en JavaScript

 ### 5. Cómo funciona la memoria en JavaScript
 ### 6. Shallow copy en JavaScript
 ### 7. Qué son JSON.parse y JSON.stringify

## Recursividad en JavaScript

 ### 8. Qué es recursividad
 ### 9. Deep copy con recursividad

## Abstracción y encapsulamiento sin prototipos

 ### 10. Abstracción con objetos literales y deep copy
 ### 11. Factory pattern y RORO
 ### 12. Module pattern y namespaces: propiedades privadas en JavaScript
 ### 13. Getters y setters

## Como identificar Objetos

 ### 14. Qué es duck typing
 ### 15. Duck typing en JavaScript
 ### 16. Instance Of en JavaScript con instancias y prototipos
 ### 17. Atributos y métodos privados en prototipos
 ### 18. Creando métodos estáticos en JavaScript

## Próximos pasos

 ### 19. ¿Quieres más cursos de POO en JavaScript?

