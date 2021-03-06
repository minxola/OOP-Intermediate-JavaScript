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
/*

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

*/

console.log(Object.getOwnPropertyDescriptors(juan));

//Object.defineProperty(obj, prop, descriptor)
//obj, es el objeto sobre el cual se define la propiedad
//prop, nombre de la propiedad definida o modificada
//descriptor, es de la propiedad que esta siendo definida
Object.defineProperty(juan, 'pruebaNasa', {
    value: 'Extraterrestres',
    enumerable: false,
    writable: false,
    configurable: false,
});

Object.defineProperty(juan, 'navigator', {
    value: 'Chrome',
    enumerable: false,
    writable: true,
    configurable: true,
});

Object.defineProperty(juan, 'editor', {
    value: 'VSCode',
    enumerable: true,
    writable: false,
    configurable: true,
});

Object.defineProperty(juan, 'terminal', {
    value: 'Bash',
    enumerable: true,
    writable: true,
    configurable: false,
});

//Cambia configurable a false
//no permite borrar las propiedades
Object.seal(juan);

//cambia configurable y writable a false
//no permite editar ni borrar las propiedades
Object.freeze(juan);

console.log(Object.getOwnPropertyDescriptors(juan));
