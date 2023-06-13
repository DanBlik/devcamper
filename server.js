import * as dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'

import routes from './routes/bootcamps.js'

dotenv.config({ path: './configs/config.env' })

const PORT = process.env.PORT || 5000

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use('/api/v1/bootcamps', routes)

app.listen(PORT, console.log(`Server starts on ${PORT}`))