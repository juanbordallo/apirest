const express= require('express')
const mongoose= require("mongoose")
require ("dotenv").config()
const userRoutes= require("./routes/user")

const app = express ();
const port = process.env.PORT || 9000

// middleweare
app.use(express.json())
app.use('/api', userRoutes)

// routes
app.get('/', (req, res) =>{
  res.send("Bienvenidos a mi API")   
})

// mongodb conection
mongoose.connect(process.env.MONGODB_URI).then(()=> console.log("Connected to MongoDB Atlas"))
.catch((error)=> console.error(error))


app.listen(9000, ()=> console.log('server listening on port', port));


