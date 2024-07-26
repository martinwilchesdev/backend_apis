const User = require('./03.model')

// A traves de las instancias creadas a partir de un modelo se pueden acceder a los datos registrados en la base de datos
const newPerson = new User({
    name: 'Ada Lovelace',
    age: 50
})

// El metodo save() permite guardar registros en una coleccion
newPerson.save()