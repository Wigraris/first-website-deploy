import express from "express";
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Сервер работает')
})

app.get('/anime', (req,res) => {
    res.json([{id: 1, title: 'Friren'},
        {id: 2, title: 'Bleach'}]
    )
})

app.listen(port, () => console.log(port + 'this number'))