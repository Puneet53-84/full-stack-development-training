// import express module
import express from 'express'
import connectToDatabase from './db.js'
// initialize app with express function
const app = express()
// define port 
const port = 3000
app.use(express.json())

let db;
// start server [node server.js]
app.listen(port,async() => {
    console.log(`server is started at ${port}`)
    db=await connectToDatabase('bank-db')
})


/* 
api section
*/

// API 1 create todo
app.post('/test-api', (req, res) => {
    
    res.send("api is up")
})


/*
API 1: Insert Account in Database

http method -> post
url -> '/create-account'
request -> body {
            'accountNo': '123ABC',
            'userName': 'dheeraj',
            'userNo': 12312213
        }
response - status = 201 body = {
                            'msg': 'account inserted successfully
                        }
*/

app.post('/create-account', async (req,res) =>{
    try{
        let userAccountData=req.body;
        console.log(`request body ${JSON.stringify(userAccountData)}`)
        await db.collection(`account`).insertOne(userAccountData);
        res.status(201).json({
            msg:'account inserted successfully'
        })
    }
    catch(error){
        res.status(500).send({
            error:error.message
        })
    }
})