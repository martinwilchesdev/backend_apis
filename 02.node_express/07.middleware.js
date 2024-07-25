const express = require('express')
const app = express()

app.listen(3000)

// Un middleware es una funcion que recibe 3 argumentos; el objeto de la solicitud, el objeto de respuesta y la funcion next
app.use((req, res, next) => {
    // Una funcion middleware puede finalizar el ciclo solicitud-respuesta cuando se cumple una condicion y se envia una respuesta al cliente
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next() // Si no se envia una respuesta, al ejecutarse la funcion next() se pasa el control a la siguiente funcion en la cola de ejecucion
})

app.get('/', (req, res, next) => {
    res.json({message: 'Hello World'})
})

app.get('/now', (req, res, next) => {
    // Usualmente el codigo de una funcion middleware añade informacion adicional a los objetos de solicitud o respuesta
    req.time = new Date().toString()
    next()
    // Las funciones middleware pueden ser encadenadas dentro de la definicion de una ruta
}, (req, res) => {
    res.json({time: req.time})
})