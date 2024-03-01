const express = require('express')
const app = express()
const port = 3000

app.get('/trang-chu', (req, res) => {
    var a = 1;
    var b = 2;

    var c = a + b;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})