import express from 'express'
import { getStudents, delStudent, addStudent, singleStudent, updateStudent } from './student.controller.js'
import multer from "multer"
import path from 'path'
import { authMiddleware } from '../../middlewares/authMiddleware.js'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    // Get original file extension
    const ext = path.extname(file.originalname);
    const filename = 'lms' + '-' + Date.now() + ext
    cb(null, filename)
  }
})

const upload = multer({ storage: storage })

const studentRouter = express.Router()

studentRouter.get("/students", getStudents)
studentRouter.get("/students/edit/:id", singleStudent)
studentRouter.patch("/students/update/:id", updateStudent)
studentRouter.post("/students/add", upload.single('image'), addStudent)
studentRouter.delete("/students/delete/:id", delStudent)

export default studentRouter