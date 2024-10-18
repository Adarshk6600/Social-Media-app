import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
const PORT = 8000

app.use(express.json())
app.use(cookieParser())
app.use(urlencoded({extended:true}))

const corsOrigin = {
  origin: 'http://localhost:5173',
  credentials:true
}

app.use(cors(corsOrigin))


app.listen(PORT, () => {
  console.log(
    'server is running on port', PORT
  );
  
})

export default app;