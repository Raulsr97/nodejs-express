const http = require('http')

const server = http.createServer((req, res) => {
    console.log('====> req(solicitud)');
    console.log(req);
})

const PORT = 3000

server.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
    
})