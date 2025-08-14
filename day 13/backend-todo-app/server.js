// import express module
const express = require('express')  
// initialize app with express function
const app = express()
// define port 
const port = 3000


/* 
api section
*/

// API 1 create todo
app.post('/create-todo', (req, res) => {
    console.log(`request is ${JSON.stringify(req.body)}`)
    res.send("todo created successfully")
})

// API 2 read all todo
app.get('/read-all-todo', (req, res) => {
    console.log(`read todo with id = ${req.query.id}`)
    let studentObj = {
        "id": 1,
        "name": "ram",
        "rollNo": 123
    }
    res.json(studentObj);
})

// API 3 
app.get('/read-todo', (req, res) => {
    console.log(`request is ${JSON.stringify(req.body)}`)
    let studentArr = [
        {
            "id": 1,
            "name": "ram",
            "rollNo": 123
        },
        {
            "id": 2,
            "name": "shyam",
            "rollNo": 456
        }
    ]
    res.json(studentArr)
})

// API 4 update todo
app.patch('/Update-todo', (req, res) => {
    console.log(`user id = ${req.query.id}`)
    console.log(`update data = ${req.body}`)
    res.send("student updated successfully")
})


// API 5 delete todo
app.delete('/Delete-todo', (req, res) => {
    console.log(`delete user with id = ${req.query.id}`)
    res.send("student deleted successfully")
})




// start server [node server.js]
app.listen(port,() => {
    console.log('server is started at ${port}')
})