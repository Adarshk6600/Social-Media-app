env.config()
import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import env from 'dotenv'
import dbConnect from './db/db.js'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(urlencoded({extended:true}))

const corsOrigin = {
  origin: 'http://localhost:5173',
  credentials:true
}

app.use(cors(corsOrigin))


app.listen(process.env.PORT, () => {
  console.log(
    'server is running on port', process.env.PORT
  );
  dbConnect()
})

export default app;