env.config()
import mongoose from "mongoose";
import env from 'dotenv'

const dbConnect = async () => {
  try {
    console.log(`${process.env.MONGO_DB_URI} is the url`);
    await mongoose.connect(`${process.env.MONGO_DB_URI}`)
    console.log('database connection successful');
    
  } catch (error) {
    console.log(`${error} database connection failed`)
  }
}

export default dbConnect;