// Al momento de importar un archivo en formato JSON, JS transforma el texto en un objeto de JS 
const curso = require('./curso.json')

// Aqui podemos entrar a cualquier propiedad como si fuera un objeto.
console.log(curso.temas[0]);
console.log(curso.numVistas);
console.log(curso.esPublico);


