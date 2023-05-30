import * as dotenv from 'dotenv'
import express from 'express'

dotenv.config({ path: './configs/config.env' })

const PORT = process.env.PORT || 5000

const app = express()

app.listen(PORT, console.log(`Server starts on ${PORT}`))