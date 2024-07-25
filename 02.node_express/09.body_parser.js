// El metodo HTTP POST en la convencion REST se utiliza para crear nuevos datos en la base de datos
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// Para parsear datos provienentes de una peticion POST, se debe utilzar el paquete `body-parser`
app.use(bodyParser.json())

// En las peticiones de tipo POST los datos son enviados en el cuerpo de la peticion no en la ruta
app.post('/', (req, res) => {
    const name = req.body.name // Los datos enviados en la peticion POST son accedidos a traves del objeto req.body
    res.end()
})

app.listen(3000)