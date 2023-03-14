const mongoose = require('mongoose')
const mongo_url = "mongodb+srv://admin:Clave1234@clusterdev.y1samuh.mongodb.net/inventarios?retryWrites=true&w=majority"

const dataBaseConection = async() => {
    try {
        mongoose.set('strictQuery',true)
        await mongoose.connect(mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database is connected!!')
    } catch(error) {
        console.error(error)
    }
}

module.exports = dataBaseConection