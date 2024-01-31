class Person {
    constructor(name1){
        this.name = name1;
    }
}


const name = 'warley';
const sumname = 'henrique';

const falaNome = () => {
    console.log(name, sumname)
}

module.exports.name = name;
exports.sumname = sumname;
exports.Person = Person;

console.log(module.exports );