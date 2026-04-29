import express from 'express'
import { getDepartments, delDepartment, addDepartment, singleDepartment } from './department.controller.js'

const departmentRouter = express.Router()

departmentRouter.get("/departments", getDepartments)
departmentRouter.get("/departments/edit/:id", singleDepartment)
departmentRouter.post("/departments/add", addDepartment)
departmentRouter.delete("/departments/delete/:id", delDepartment)

export default departmentRouter