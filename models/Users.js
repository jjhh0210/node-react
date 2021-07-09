const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength : 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {  //유효성 관리
        type: String
    },
    tokenExp: { //토큰 유효 기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema) //schema를 모델로 감싸줌(model: User)
module.exports = { User } //다른곳에서 쓸수 있게 export