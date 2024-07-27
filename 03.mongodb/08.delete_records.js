const User = require('./03.model')

const deleteData = async () => {
    // El metodo findByIdAndRemove() realiza la busqueda de un documento por su id y posteriormente lo elimina
    await User.findByIdAndDelete('66a30513c1c0c0a6449147d1')

    // El metodo findOneAndDelete() realiza la busqueda de un documento que coincida con el objeto pasado como argumento y posteriormente lo elimina
    await User.findOneAndDelete({ name: 'Ada Lovelace' })
}

deleteData()