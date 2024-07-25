const express = require('express')
const app = express()

app.listen(3000)

// La solicitudes al servidor ser pueden responder con un archivo utilizando el metodo sendFile(path)
app.get('/', (req, res) => {
    // La variable global __dirname calcula la ruta actual
    res.sendFile(`${__dirname}/public/views/index.html`)
})