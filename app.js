// app.js
const express = require('express')
const app = express()
const port = 3000


app.use((req, res, next) => {
  //send req - start time
  const start = new Date()
  const formatTime = start.toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })

  //res sent - end time
  res.on('finish', () => {
    const end = new Date()
    const spentTime = end - start

    // print log
    console.log(`${formatTime} | ${req.method} from ${req.originalUrl} | total time: ${spentTime}ms`)
  })
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})