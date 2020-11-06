import express from 'express'
import { json } from 'body-parser'

import {job_router} from './routes/job.route'

const app = express()
app.use(json())

app.use('/api/job', job_router)

app.get('/', (req, res) => {
    res.send('Hello there')
})

export {app}