const  express = require('express')
const  app = express()
const  port = 3000

// parse the request body 
app.use(express.json());

// API section
app.post('/insert-user',(request,response) =>{
    console.log(`request recieved is = ${JSON.stringify(request.body)}`)
    response.send('user inserted successfully')
})

// create an api below to send request body in response 
app.post('/insert-user-1',(request,response) =>{
    console.log(`request recieved is = ${JSON.stringify(request.body)}`)
    response.send(`${JSON.stringify(request.body)}`)
})

app.post('/insert-user-11',(request,response) =>{
    console.log(`request recieved is = ${JSON.stringify(request.body)}`)
    console.log(typeof request.body)
    response.send(request.body)
})

// response person name is ram 

app.post('/insert-user-6',(request,response) =>{
    console.log(`request recieved is = ${JSON.stringify(request.body)}`)
    response.json(request.body.address);
})




app.listen(port,() => {
    console.log("my server is started at port"+port)
})