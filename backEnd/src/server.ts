
import express, {Request, Response } from "express";
const app = express()
const port = 3000
app.use(express.static('public'))
app.use(express.json())
const posts = [
  {id: 1, title: 'Harry Potter', author: 'Maria'},
  {id: 2, title: 'Stranger Things', author: 'Lorence'}
]
let id = 3
app.post('/api/posts', (req: Request,res: Response) => {
  const {title, author} = req.body
  if(!title || !author){
    res.status(400).json({error: 'Invalid request: title and author are required'})
    return
  }
  posts.push({
    id,title, author
  })
  id++
  res.send(posts)
})
app.listen(port, () => {
  console.log(`local BE works on port: ${port}`)
})