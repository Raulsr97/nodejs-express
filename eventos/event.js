// importando el modulo 'events'
const EvenEmitter = require('events')

// Creando una instancia de la clase EventEmitter
const emisorProductos = new EvenEmitter()


// Se realiza un evento de compra con el metodo on() que recibe dos parámetros de entrada: el evento, la acción a realizar cuando ocurra dicho evento. 
emisorProductos.on('compra', (total, numProductos) => {
    console.log(`Se realizo una compra por: $${total}`);
    console.log(`Número de productos: ${numProductos}`);
}) 

// Emite la accion que se haya programado al realizar el evento
emisorProductos.emit('compra', 500, 5)


