import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.send("Jobstar API")
})

router.get('/search', (req, res) => {
    res.send("Search for keyword")
})

export {router as job_router}