import express from 'express'

const app = express()
const PORT= 5000;

app.get('/', (req, res) => {
    return res.send({
        status: "Live",
        msg: "Server is running..."
    })
})

app.listen( PORT, ()=>{
    console.log(`Server is started: http://localhost:${PORT}`)
})