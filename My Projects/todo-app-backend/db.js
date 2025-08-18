import { MongoClient } from 'mongodb'

let isDbConnected = null;

const CLUSTER_URL = "mongodb+srv://dheeraj:Tunfyt-0tojqi-gaddaj@cluster0.xza6ahk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(CLUSTER_URL)

// async make a function asynchronous, we can use await
async function connectToDatabase(dbName) {
    if (isDbConnected == null) {
        try {
            // await waits for a mongodb connection to finish before moving to the next line in an async function.
            await client.connect();
            isDbConnected = client.db(dbName)
            console.log("database connected successfull")
        } catch (e) {
            console.log(`database connection, error ${e.message}`)
        }
    } else {
        console.log("database already connected")
    }

    return isDbConnected;
}

export default connectToDatabase;