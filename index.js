const http = require('http')
const app = require('./app')
const server = http.createServer(app)

const port = process.env.PORT || 3000

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log('Http server listening at port:' + port)
})