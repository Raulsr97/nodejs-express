function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto}`);
        setTimeout(() => {
            if (producto === 'taza') {
                resolve('Ordenando una taza')
            } else {
                reject('El producto no se encuentra disponible')
            }
        }, 2000)
    })
} 

function procesarPedido(respuesta) {
    return new Promise((resolve) => {
        console.log('Procesando respuesta...');
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(() => {
            resolve('Gracias por su compra!')
        }, 4000)
    })
}

ordenarProducto('taza')
    .then(respuesta => {
        console.log('Respuesta recibida');
        console.log(respuesta);
        return procesarPedido(respuesta)
            
    })

