/**
 * Mientras un servidor HTML sirve un archivo HTML, una API sirve datos
 * Una API REST permite el intercambio de datos sin la necesidad de que el cliente conozca a detalle el funcionamiento del servidor.
 * El cliente unicamente necesita saber donde se ubican los archivos (la direccion URL) y la accion requerida a realizar (el verbo HTTP).
*/
const express = require('express')
const app = express()

// El verbo HTTP GET es usado para obtener informacion sin realizar modificaciones en el servidor.
app.get('/json', (req, res) => {
    // El metodo res.json() recube un objeto JSON como argumento. Este metodo finaliza el ciclo solicitud-respuesta, enviando el objeto JSON como respuesta al cliente
    res.json({message: 'Hello World'})
})

app.listen(3000)