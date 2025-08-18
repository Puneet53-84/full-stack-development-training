import { MongoClient } from 'mongodb'

let isDbConnected = null;

const CLUSTER_URL = "mongodb+srv://puneetsharmait5418:1eE617EeJ8ykP8gN@cluster0.n5dmm4v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(CLUSTER_URL)

//async make a function asynchronous,we can use await

async function connectToDatabase(isDbConnected) {
    if (isDbConnected == null) {
        try{

        //await waits for a mongodb connection to finish before moving to the next line in an async function.
        isDbConnected = await client.connect(dbName);
        isDbConnected=client.db(dbName)
        console.log("database connected succesfull")
        } catch(e){
            console.log(`database not connected,error ${e.message}`)
        }
    } else {
        console.log("database already connected}")
        
    }
    return isDbConnected;
}
export default connectToDatabase