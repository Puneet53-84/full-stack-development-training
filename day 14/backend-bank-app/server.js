// import express module
import express from 'express'
import connectToDatabase from './db.js'
// initialize app with express function
const app = express()
// define port 
const port = 3000


// start server [node server.js]
app.listen(port,async() => {
    console.log(`server is started at ${port}`)
    await connectToDatabase('bank-db')
})


/* 
api section
*/

// API 1 create todo
app.post('/test-api', (req, res) => {
    
    res.send("api is up")
})
