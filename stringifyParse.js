const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e'
    },
    editA(){
        this.a = 'AAAAAA';
    }
}

//se guarda en la memoria Stack
//No trabaja con métodos, los omite
const stringifiedComplexObj = JSON.stringify(obj1);

//la copia ya no hace referencia al objeto 1
//Este objeto no tendrá el metodo de obj1
//Sin embargo se soluciona el problema con los objetos
const obj2 = JSON.parse(stringifiedComplexObj);