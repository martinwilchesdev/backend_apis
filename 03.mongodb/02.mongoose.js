process.loadEnvFile()

const mongoose = require('mongoose')

// El objeto mongoose puede acceder al metodo connect() para conectarse a la base de datos, el cual recibe como argumento la URI de conexion de MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(success => {
        console.log('Connected to database')
    })
    .catch(error => {
        console.log('Error connecting to database')
    })