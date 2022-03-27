const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    }
}

const obj2 = {};
for (prop in obj1){
    obj2[prop] = obj1[prop];
}
//Esto falla cuando la copia en c hace referencia
//al objeto, por lo que se copia la referencia mas
//mas no el objeto.

//En este caso también falla cuando se hace referencia al objeto
//en c del objeto 1
const obj3 = Object.assign({}, obj1);

//En este caso Objeto 4, hereda las propiedades de objeto 1
//sin embargo lo hereda en el __proto__
const obj4 = Object.create(obj1);

//obj4.a >>'a'
/*objeto 4, las props estan en __proto__
{}
__proto__: Object
    a: "a"
    b: "b"
    c: {d: 'd', e: 'e'}

En este caso al hacer asignaciones como
obj4.a = 'AAAAAA'
El objeto 4 quedaría:
{a: 'AAAAAAAAAAA'}
    a: "AAAAAAAAAAA"
    [[Prototype]]: Object
    a: "a"
    b: "b"
    c: {d: 'd', e: 'e'}
Y no se modificaría el prototipo, es decir el objeto 1
Sin embargo si hacemos obj4.__proto__.a = 'AAAAA'
estamos alterando el prototipo, es decir al obj1


//Si modificamos el objeto en c, del objeto 4, se vera
también el cambio en objeto 1, ya que está haciendo
referencia a dicho objeto c en objeto1
*/