const execa = require('execa')

execa('nodemon', ['-w', './execa.js']).then(r => console.log('martin', r.stdout)/* 2019年10月24日 09时50分42秒 */)