// import mongoose from "mongoose"
// 
// import Post from "./Post";
// const app = express()
// const port = 3000

// app.use(express.json())

// app.post('/', async (req, res) => {
//   const {author,title, content, picture} = req.body
//   const post = await Post.create({author, title,content, picture})
//   res.json(post)
// })


// // 

//  const username = "kairmoldinovdias_db_user"
//  const pass = "SS7C5IxkS9OhVApi"
//  const DB_URL = "mongodb://atlas-sql-6a32cd56f4b26eb1a22ea93c-h1arro.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin"
//  async function startApp(){
//   try{
//     await mongoose.connect(DB_URL)
//     app.listen(port, () => console.log('port started ' + port ))
//   }catch(e){
//     console.log(e)
//   }
//  }
//  startApp()
import express, { Request, Response } from "express";
const app = express()
const port = 3000
app.use(express.static('public'))
const posts = [
  {id: 1, title: 'Harry Potter', author: 'Maria'},
  {id: 2, title: 'Stranger Things', author: 'Lorence'}
]
app.get('/api/posts', (req: Request,res: Response) => {
  res.json(posts)
})
app.listen(port, () => {
  console.log(`local BE works on port: ${port}`)
})
app.get('/login', (req, res) => {
    res.render('/login')
})
// function authenticate(name, pass, fn) {
//   if (!module.parent) console.log('authenticating %s:%s', name, pass);
//   let user = users[name];
//   // query the db for the given username
//   if (!user) return fn(null, null)}
// app.post('/login', function(req,res,next) {
//     try{
//         if (!req.body) return res.send(400)
//         authenticate(req.body.username, req.body.password) 
//     }catch(err){
//         console.log(err)
//     }
// })