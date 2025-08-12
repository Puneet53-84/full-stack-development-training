// import express module
const express = require('express')  
// initialize app with express function
const app = express()
// define port 
const port = 3000


/* 
api section
*/

/* api section 1----------------------------
http method = get 
url = '/api-1'
request = {}
response = "this is my first api" 
*/

app.get('/api-1',(request,response) =>{
    response.send('this is my first api')
})

app.get('/self-api',(request,response) => {
    response.send('My name is Puneet Sharma')
})

app.get('/test-api-3',(request,response) =>{
    response.send("my test api 3 is working fine")
})

app.get('/homepage-admin',(request,response) =>{
    response.send("this is website homepage")
})

// start server [node server.js]
app.listen(port,() => {
    console.log("my server is started at port"+port)
})