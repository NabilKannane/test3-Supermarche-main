const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config()


//Connection au Base de données MONGODB
const DB = process.env.DB_URI

const connectDB = async() =>{
    try{
        mongoose.set('strictQuery' , false)
        await mongoose.connect(DB)
        console.log('Connected to Mongodb !')
    }catch(error){
        console.log(error.message)
    }
}

connectDB();

// Lancement de serveur

if(process.env.PORT){
app.listen(process.env.PORT , ()=>{
    console.log('Demarage du serveur en PORT : '+process.env.PORT);
})
}

module.exports = app ;