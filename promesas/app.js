const promesaCumplida = false

// Creamos una nueva instancia del objeto Promise que recibe una funcion con resolve y reject como parámetros(tambien son funciones)
const miPromesa = new Promise((resolve, reject) => {
    // Utilizamos setTimeout para dar el efecto de asincronia eejcutando el proceso 3seg despues
    setTimeout(() => {
        // Manejamos si la promesa fue cumplida o rechazada con un condicional if.
        if(promesaCumplida) {
            resolve('Promesa cumplida')
        } else {
            reject('Promesa rechazada...')
        }
    }, 3000)
})

// Función para manejar la promesa cumplida
const manejarPromesaCumplida = (valor) => {
    console.log(valor);
}

// Función para manejar la promesa rechazada
const manejarPromesaRechazada = (razonRechazo) => {
    console.log(razonRechazo);
    
}

// Usamos el metodo then() para ejecutar la funcion segun sea el caso.
miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada)