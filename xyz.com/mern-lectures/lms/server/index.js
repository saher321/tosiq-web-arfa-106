import express from 'express'
import dotenv from 'dotenv'
import departmentRouter from './modules/department/department.route.js';
import studentRouter from './modules/student/student.route.js';
import cors from 'cors'
import { connectDB } from './config/db.js';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config()
const PORT = process.env.PORT || 5000
const app = express();

app.use(express.json())
app.use(cors())


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// http://localhost:5000/departments
app.use('', departmentRouter)
app.use('', studentRouter)

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
