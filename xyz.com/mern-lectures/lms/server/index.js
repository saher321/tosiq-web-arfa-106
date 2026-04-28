import express from 'express'
import dotenv from 'dotenv'
import departmentRouter from './modules/department/department.route.js';
import cors from 'cors'
import { connectDB } from './config/db.js';

dotenv.config()

const PORT = process.env.PORT || 5000
const app = express();

app.use(express.json())
app.use(cors())

// http://localhost:5000/departments
app.use('', departmentRouter)

app.get('/', (req, res) => {
    return res.send({
        status: true,
        message: "Server is running..."
    })
})


connectDB().then(() => {
    app.listen( PORT, () => {
        console.log(`Server is started http://localhost:${PORT}`)
    })
})
