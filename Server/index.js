import app from "./app.js";

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'response from the backend home page',
    success:true
  })
})