const express = require('express')
const app = express()

app.listen(3000)

// Un servidor HTML tiene uno o mas directorios que son accesibles por el usuario en el que se alojan archivos estaticos a los que puede acceder el servidor.
app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/views/index.html`)
})

