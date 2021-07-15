if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod'); //deploy환경: prod.js 파일에서 가져옴
} else{
    module.exports = require('./dev'); //local 개발환경: dev.js파일에서 가져옴
}