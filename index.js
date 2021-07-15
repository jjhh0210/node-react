const express = require('express') //
const app = express()   //새로운 express 앱 생성
const port = 5000       //포트 = 5000 지정
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require("./models/Users");   //User 모델 가져옴


//application/x-www-form-urlencoded 데이터를 분석하여 가져옴 
app.use(bodyParser.urlencoded({extended: true}));
//application/json 데이터 분석하여 가져옴
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=> console.log('MongoDB Connected..'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World! ~~안녕하세요!!!g')
})

app.post('/register', (req,res) => {    //endpoint: register
    //회원가입 할 때 필요한 정보들을 cliet에서 가져오면 데이터베이스에 넣어준다.
    
    const user = new User(req.body) //bodyParser를 이용하여 req.body 로 정보를 받아옴
    user.save((err, userInfo) => {
        if(err) return res.json({success:false, err})
        return res.status(200).json({   //성공시 json 파일로 success:true뜨게함
            success:true
        })
    })
})
  
 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})