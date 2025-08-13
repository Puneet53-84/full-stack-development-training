// const express = require('express') 
import express from 'express'

const app = express()
const port = 3000

app.use(express.json())


app.get('/test', (req, res) => {
    console.log(`request is ${JSON.stringify(req.body)}`)
    res.send("api is working")
})


// API 1 create student
app.post('/insert-one-student', (req, res) => {
    console.log(`request is ${JSON.stringify(req.body)}`)
    res.send("student created successfully")
})

// API 2 Read a single student
app.get('/read-one-student', (req, res) => {
    console.log(`read student with id = ${req.query.id}`)
    let studentObj = {
        "id": 1,
        "name": "ram",
        "rollNo": 123
    }
    res.json(studentObj);
})

// API 3 read all students
app.get('/read-many-student', (req, res) => {
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

// API 4 update student
app.patch('/update-student', (req, res) => {
    console.log(`user id = ${req.query.id}`)
    console.log(`update data = ${req.body}`)
    res.send("student updated successfully")
})


// API 5 delete student
app.delete('/delete-student', (req, res) => {
    console.log(`delete user with id = ${req.query.id}`)
    res.send("student deleted successfully")
})


// start server
app.listen(port, () => {
    console.log(`my server is running at ${port}`)
})