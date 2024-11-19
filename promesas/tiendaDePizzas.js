const estatusPedido = () => {
    return Math.random() < 0.8
}

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()) {
            resolve('Pedido exitoso! Su pizza esta en camino')
        } else {
            reject('Ocurrio un error, porfavor intente nuevamente')
        }
    }, 3000)
})

miPedidoDePizza
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    })

