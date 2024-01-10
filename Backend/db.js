import mongoose from 'mongoose'

const connectDb = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch(e) {
        console.log('Connection Failed !!!', e)
        process.exit(1)
    }
}

const cardSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    interests : {
        type : Array
    }
})

const Card = mongoose.model('Card', cardSchema)
export { Card, connectDb}