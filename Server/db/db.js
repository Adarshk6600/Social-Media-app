env.config()
import mongoose from "mongoose";
import env from 'dotenv'
import { DB_NAME } from '../constants.js'; 

const dbConnect = async () => {
  try {
    console.log(`${process.env.MONGO_DB_URI}/${DB_NAME}`);
    await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`)
    console.log('database connection successful');
    
  } catch (error) {
    console.log(`${error} database connection failed`)
  }
}

export default dbConnect;