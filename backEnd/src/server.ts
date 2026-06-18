import mongoose from "mongoose"
import express from "express";
import Post from "./Post";
const app = express()
const port = 3000

app.use(express.json())

app.post('/', async (req, res) => {
  const {author,title, content, picture} = req.body
  const post = await Post.create({author, title,content, picture})
  res.json(post)
})


// 

 const username = "kairmoldinovdias_db_user"
 const pass = "SS7C5IxkS9OhVApi"
 const DB_URL = "mongodb://atlas-sql-6a32cd56f4b26eb1a22ea93c-h1arro.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin"
 async function startApp(){
  try{
    await mongoose.connect(DB_URL)
    app.listen(port, () => console.log('port started ' + port ))
  }catch(e){
    console.log(e)
  }
 }
 startApp()