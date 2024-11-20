// Importamos el módulo http y lo almacenamos en una constante con el mismo nombre.
const http = require('http')

// Constante para almacenar al servidor, Creamos un servidor con el metodo createServer(), req(contiene la solicitud http), res(contiene la respuesta http)
const servidor = http.createServer((req, res) => {
    console.log('Solicitud nueva');
    
    // Resultado que se le quiere enviar al cliente
    res.end('Hola mundo') 
}) 

const PUERTO = 3000

// Metodo listen() para escuchar el servidor, necesita un puerto y una arrow function
servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
    
})



// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end('Hola mundo')
// })

// server.listen(5000, () => {
//     console.log('El servidor esta escuchando...');
    
// })