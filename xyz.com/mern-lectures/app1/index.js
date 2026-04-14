import express from 'express'

const app = express()
const PORT= 5000;

app.get('/', (req, res) => {
    return res.send({
        status: "Live",
        msg: "Server is running..."
    })
})

const colors = [
            { code: "P-101", name: "Purple" },
            { code: "B-043", name: "Black" },
            { code: "G-239", name: "Gray" }
        ]
app.get('/house-colors', (eq, res) => {
    return res.send({
        status: true,
        houseColors: colors
    })
})

app.listen( PORT, ()=>{
    console.log(`Server is started: http://localhost:${PORT}`)
})

// assignment 14 april 2026
// create url of products
// id, name, price, image(url)