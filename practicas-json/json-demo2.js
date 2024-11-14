let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 32442,
    "numLikes": 3424,
    "temas": [
        "JavaScript",
        "Node.js"
    ],
    "esPublico": true
}

// Transfomando un objeto de JavaScript a formato JSON con JSON.stringify()
let infoCursoJSON = JSON.stringify(infoCurso)

console.log(infoCursoJSON);
console.log(typeof(infoCursoJSON));

// Transformando JSON  a un objet de JavaScript con JSON.parse()
let infoCursoObjeto = JSON.parse(infoCursoJSON)

console.log(infoCursoObjeto);
console.log(typeof(infoCursoObjeto));


