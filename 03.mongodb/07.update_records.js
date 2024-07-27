const User = require('./03.model')

const updateData = async () => {
    // El metodo findByIdAndUpdate() actualiza un documento a partir del id proporcionado como primer parametro a la funcion
    const userUpdated = await User.findByIdAndUpdate('66a30513c1c0c0a6449147d1', {
        name: 'Arto Hellas'
    }, { new: true }) // El objeto { new: true } pasado como tercer parametro se utiliza para retornar el documento modificado
}

updateData()