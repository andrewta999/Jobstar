import mongoose from 'mongoose'

import {app} from './app'

const start = async () => {
    try {
        await mongoose.connect('mongodb://mongodb-srv:27017/auth')
        console.log('MongoDb is connected')
    } catch (err) {
        console.log(err)
    }
    app.listen(3000, () => {
        console.log("App listening on port 3000!")
    })
}

start()


