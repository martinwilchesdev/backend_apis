const User = require('./03.model')

const getData = async () => {
    // El metodo find() retorna un arreglo conteniendo los documentos de una coleccion relacionada al modelo que la consulta
    const users = await User.find({name: 'Ada Lovelace'}) // find() puede recibir como argumento un objeto, el cual se utiliza para obtener documentos que cumplan con una condicion
}

getData()