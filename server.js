import * as dotenv from 'dotenv'
import express from 'express'

import routes from './routes/bootcamps.js'

dotenv.config({ path: './configs/config.env' })

const PORT = process.env.PORT || 5000

const app = express()

app.use('/api/v1/bootcamps', routes)

app.listen(PORT, console.log(`Server starts on ${PORT}`))