const express = require('express')
const app = express()

app.listen(3000)

// Los parametros de ruta son segmentos de la misma delimitados por `/`
app.get('/:word/echo', (req, res) => {
    // Cada segmento captura el valor de la parte de la URL con la cual coincide
    res.json({echo: req.params.word}) // Los valores capturas se encuentran en el objeto req.params
})

/**
 * Los datos enviados por el cliente se pueden codificar en un query string despues de la ruta.
 * Un query string es delimitado de la ruta por un simbolo de pregunta `?`, seguido de pares campo=valor.
 * Cada par campo=valor es separado mediante un simbolo `&`
 * */
app.get('/library', (req, res) => {
    // La peticion realizada a la ruta /library?userId=546&bookId=6754, retornara un objeto { userId: '546', book: '6453' }|
    res.json(req.query) // Los valores capturados se encuentran en el objeto req.query
})