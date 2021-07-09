const express = require('express') //
const app = express()   //새로운 express 앱 생성
const port = 5000       //포트 = 5000 지정

app.get('/', (req, res) => {
  res.send('Hello World! ~~안녕하세요!!!!')
})

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jjhh0210:lp1331lp@boilerplate.lo4fh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=> console.log('MongoDB Connected..'))
  .catch(err => console.log(err))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})