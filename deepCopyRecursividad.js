const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e'
    },
    f: [3, 4],
    editA(){
        this.a = 'AAAAAA';
    }
}

console.log(obj1);

function isObject(param){
    return typeof param == "object";
}

function isArray(param){
    return Array.isArray(param);
}

/* function deepCopy(subject){
    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if(subjectIsArray){
        copySubject = [];
    } else if(subjectIsObject){
        copySubject = {};
    } else {
        return subject;
    }

    for(key in subject){
        const keyIsObject = isObject(subject[key]);

        if(keyIsObject){
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if(subjectIsArray){
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject;
} */

//Otra función que hace lo mismo
/* function typeOfElement(element){
    switch(Object.prototype.toString.call(element)){
        case "[object Object]": return "object";
        case "[object Array]": return "array";
        default: return "Does not matter";
    }
}

function deepCopy(element){
    let elementType = typeOfElement(element);

    //Si no es array ni objeto, retorna element
    if(elementType !== "array" && elementType !== "object") return element;

    //solo para el caso de ser array u objeto, usa copy
    let copy;
    if(elementType === "array") copy = [];
    if(elementType === "object") copy = {};

    for(item in element){
        copy[item] = deepCopy(element[item]);
    }

    return copy;
} */

//otra forma mas resumido
const deepCopy = (e) => {
    if(!isObject(e)) return e;

    const copy = isArray(e) ? [] : {};

    for(i in e){
        const current = e[i];

        copy[i] = isObject(current) ? deepCopy(current) : current;
    }

    return copy;
}


const obj2 = deepCopy(obj1);
console.log(obj2);