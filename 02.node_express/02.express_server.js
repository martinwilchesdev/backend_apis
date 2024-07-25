const express = require('express')
const app = express()

// El metodo listen() recibe como parametro el numero del puerto en donde la aplicacion sera ejecutada.
app.listen(3000)

// La estructura de las rutas en Express es la siguiente `app.METHOD(PATH, HANDLER)`
app.get('/', (req, res) => {
    // req es el objeto de la solicitud y res el objeto de la respuesta
    res.send('Hello World')
})