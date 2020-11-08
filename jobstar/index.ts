// import mongoose from 'mongoose'

import {app} from './app'

const start = async () => {
    
    app.listen(3000, () => {
        console.log("App listening on port 3000!")
    })
}

start()


