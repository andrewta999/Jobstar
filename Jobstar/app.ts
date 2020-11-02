import express from 'express'
import { json } from 'body-parser'

const app = express()
app.use(json())

app.get('/api', (req, res) => {
    res.send('Hello there')
})

export {app}