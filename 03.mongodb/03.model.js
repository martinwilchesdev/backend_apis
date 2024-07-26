process.loadEnvFile()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)

// Un esquema permite definir la estructura de los datos en una coleccion en MongoDB
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

// Un modelo proporciona la interfaz para interactuar con la base de datos, permitiendo realizar operaciones CRUD sobre los documentos de una coleccion.
const User = mongoose.model('User', userSchema)

module.exports = User