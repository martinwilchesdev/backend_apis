const User = require('./03.model')

const getData = async () => {
    // El metodo findOne() retorna unicamente un documento. Se usa especialmente cuando se realizan busquedas por propiedades que han sido declaradas como unicas.
    const user = await User.findOne({ name: 'Ada Lovelace' })
    console.log(user)

    /**
     * Cuando se guarda un documento, MongoDB automaticamente añade un campo _id y define su valor con una clave alfanumerica unica.
     * El metodo findById() recibe como argumento el id del documento que se desea obtener.
    */
    const userById = await User.findById('66a30513c1c0c0a6449147d1')
    console.log(userById)
}

getData()
