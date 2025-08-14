import { MongoClient } from 'mongodb'

let db = null;

const CLUSTER_URL = "mongodb+srv://puneetsharmait5418:1eE617EeJ8ykP8gN@cluster0.n5dmm4v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(CLUSTER_URL)

//async make a function asynchronous,we can use await

async function connectToDatabase(dbName) {
    if (db == null) {
        try{

        //await waits for a mongodb connection to finish before moving to the next line in an async function.
        db = await client.connect(dbName);
        db=client.db(dbName)
        console.log("database connected succesfull")
        } catch(e){
            console.log(`database not connected,error ${e.message}`)
        }
    } else {
        console.log("database not connected}")
        
    }
    return db;
}
export default connectToDatabase