import express from 'express'
import mongoose from 'mongoose'
import { json } from 'body-parser'

const app = express()
app.use(json())

app.get('/api', (req, res) => {
    res.send('Hello there')
})

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


