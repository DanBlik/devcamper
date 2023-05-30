import * as dotenv from 'dotenv'
import express from 'express'

dotenv.config({ path: './configs/config.env' })

const PORT = process.env.PORT || 5000

const app = express()

app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps'})
})

app.get('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}`})
})

app.put('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}`})
})

app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}`})
})

app.post('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({ success: true, msg:  `Create bootcamp ${req.params.id}`})
})

app.listen(PORT, console.log(`Server starts on ${PORT}`))