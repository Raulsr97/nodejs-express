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



Promesas en JavaScript:
 - Promesa: **Objeto** que representa el **eventual resultado o error** de una **operación asíncrona**.
 - Promesa -> Pendiente(pending) -> Cumplida(fulfilled) ó Rechazada(rejected).
 - El objeto Promesa se asocia a una **callback function**.
 - Las promesas tienen un **método .then()** con el cual podemos decidir que ocurre cuando se completa la promesa(éxito o error).
 - **.catch()**: Método de promesa que solo **se ejecuta si la promesa es rechazada**.
 - Las funciones asincronas retornan promesas

Función callback:
 - Función que se pasa a otra función como argumento y luego se ejecuta dentro de la función externa.



Modelo cliente-servidor:
 - Modelo que usamos para acceder a internet y obtener recursos e información 
 - Cliente: El navegador desde el cual se realizan solicitudes a un servidor.
 - Servidor: Programa que se ejecuta en un servidor fisico para ofrecer un servicio al cliente. Envía información.
 - Protocolo: Conjunto de reglas que permiten transmitir infromación entre dispositivos de una red.

Protocolo HTTP:
 - Hypertext Transfer Protocol(Protocolo de transferencia de hypertexto)

Solicitud HTTP(Request): 
 - Metodos HTTP
 - Camino(path)
 - Version de HTTP
 - Cabeceras(headers)
 - Cuerpo(body)

Metodo HTTP:
 - Verbo o sustantivo que indica la intencion de la solicitud.
 - GET: Verbo para solicitar un recurso especifico
 - PUT: Verbo para modificar un recurso especifico.
 - POST: Verbo  para crear un recurso especifico.  
 - DELETE: Verbo para eliminar un recurso especifico.
 - OTROS...

Respuestas HTTP:
 - Código de estado
 - Text de estado
 - Versión de HTTP
 - Cabeceras(headers): Opcionales, proveen información adicional sobre la respuesta
 - Cuerpo(body): Contiene la información que se debe enviar desde el servidor hacia el cliente

Códigos de estado:
 - Números que indican si se ha completado exitosamente la solicitud HTTP
 - Respuestas informativas (100-199)
 - Respuestas satisfactoriaS (200, 299)
 - Redirecciones (300-399)
 - Errores de los clientes (400-499)
 - Errores del servidor (500-599)

Módulo HTTP:
 - Este módulo le permite a Node.js transmitir información con el protocolo HTTP
 
Puerto:
 - Ubicacion virtual del sistema operativo en el cual se puede acceder a una aplicacion o a un proceso especifico que se este ejecutando en ese puerto