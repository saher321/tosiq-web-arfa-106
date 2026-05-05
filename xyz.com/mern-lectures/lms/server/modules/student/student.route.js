import express from 'express'
import { getStudents, delStudent, addStudent, singleStudent, updateStudent } from './student.controller.js'
import multer from "multer"

const studentRouter = express.Router()
const upload = multer({ dest: './uploads/' })

studentRouter.get("/students", getStudents)
studentRouter.get("/students/edit/:id", singleStudent)
studentRouter.patch("/students/update/:id", updateStudent)
studentRouter.post("/students/add", upload.single('image'), addStudent)
studentRouter.delete("/students/delete/:id", delStudent)

export default studentRouter