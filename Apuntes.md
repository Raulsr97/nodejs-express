# CURSO DE NODEJS Y EXPRESS

Node.js: Entorno de ejecución de javascript orientado a eventos asíncronos.

Características: 
    - Open-source
    - Multiplataforma
    - Basado en el motor V8 de Google. 

Conceptos Básicos

- Arquitectura cliente-servidor: Modelo en el cual el servidor envía recursos al dispositivo que lo solicita(cliente).
- Desarrollo back-end: Área del desarrollo web que se encarga del desarrollo de los servidores y bases de datos.
- Protocolo: Reglas que permiten que dos entidades de una red de comuniquen.
- Base de datos: Conjunto de datos estructurados sobre un mismo contexto que se pueden consultar.
- Protocolo HTTP/HTTPS

Node.js es usado para:
    - Desarrollo back-end
    - Desarrollar APIs

API: Application Programing Interface(Interfaz de Programacion de Aplicaciones)


Node.js nos permite desarrollar aplicaciones escalables y de tiempo real.
    - Escalable: Su **rendimiento** se puede **adaptar** a medida que crece el uso de la aplicación y recibe más solicitudes.
    - Aplicación en tiempo real: Establece una **conexión bidireccional y dinámica** entre el servidor y el cliente, analiza los eventos que ocurren y reacciona de una forma casi inmediata

Node.js NO es:
    - Lenguaje de programación 
    - Framework
    - Libreria

Módulos en Node.js
 - Funcionalidad organizada en uno o varios archivos JavaScript que puede ser **reutilizada** en una aplicación.
 - Ventajas:
    - Evitar repetición del código.
    - Reutilizar el código.
    - Es más fácil encontrar y corregir 'bugs'.
    - Es más fácil modificar el código.
    - Es más fácil agregar una nueva funcionalidad.

Importar un módulo: Darle acceso a funciones y elementos definidos en otro módulo, para importar un módulo a otro debemos exportarlo.

Módulo process: Provee infrormación sobre el proceso de Node.js que se está ejecutando, también puede tener cierto control sobre el proceso.

Módulo timers: Contiene funciones que ejecutan código luego de un cierto periodo de tiempo.
 - setTiemout()
 - setImmediate()
 - setInterval()


JSON(JavaScript Object Notation): 
 - **Formato de texto** usado para almacenar y transportar información
 - Basado en la notación de objetos de JavaScript 
 - Nos permite almacenar objetos de JavaScript como objetos 
 - Los datos se representan como **pares clave-valor**(propiedades)


package-lock.json:
 - Se genera automaticamente cuando npm modifica el árbol de node_modules o package.json
 - Describe el árbol generado para que futuras instalaciones puedan generar exactamente el mismo árbol para que otros desarrolladores puedan instalar exactamente las mismas dependencias.


Evento:
 - Una acción que se realiza en la aplicación.

Emitters(emisores):
 - **Objetos** que **emiten eventos** nombrados y llaman a funciones específicas cuando ocurren.
 - Son instancias de la clase **EventEmitter** 
 - Tienen un método **on()** para asociar una **función(Event Handler)** al evento, esa función se ejecuta cuando ocurre el evento
 

Módulo events:
 - Definir
 - Emitir
 - Escuchar 