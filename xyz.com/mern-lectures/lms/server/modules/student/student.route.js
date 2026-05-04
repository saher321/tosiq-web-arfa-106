import express from 'express'
import { getStudents, delStudent, addStudent, singleStudent, updateStudent } from './student.controller.js'

const studentRouter = express.Router()

studentRouter.get("/students", getStudents)
studentRouter.get("/students/edit/:id", singleStudent)
studentRouter.patch("/students/update/:id", updateStudent)
studentRouter.post("/students/add", addStudent)
studentRouter.delete("/students/delete/:id", delStudent)

export default studentRouter