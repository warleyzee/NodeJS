const path = require('path');
const pathFile = path.resolve(__dirname, 'test.json');
// const write = require('./modules/write');
const read = require('./modules/read');

// const person = [
//     {name: 'Joao'},
//     {name: 'Luiza'},
//     {name: 'Mario'},
//     {name: 'Carlos'},
// ]

// const json = JSON.stringify(person, '', 2); 

// write(pathFile, json);

async function readFile(pathRead){
    const dados = await read(pathRead);
    renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados);

    dados.forEach(val => console.log(val));
}

readFile(pathFile);
