// import express module
const express = require('express')  
// initialize app with express function
const app = express()
// define port 
const port = 3000


/* 
api section
*/

// start server [node server.js]
app.listen(port,() => {
    console.log('server is started at ${port}')
})