import express from 'express'
import dotenv from 'dotenv'
import departmentRouter from './modules/department/department.route.js';
dotenv.config()

const PORT = process.env.PORT || 5000
const app = express();

// http://localhost:5000/departments
app.use('', departmentRouter)

app.get('/', (req, res) => {
    return res.send({
        status: true,
        message: "Server is running..."
    })
})


app.listen( PORT, () => {
    console.log(`Server is started http://localhost:${PORT}`)
})
