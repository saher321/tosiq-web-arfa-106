import express from 'express'
import { getDepartments, delDepartment } from './department.controller.js'

const departmentRouter = express.Router()

departmentRouter.get("/departments", getDepartments)
departmentRouter.delete("/departments/delete/:id", delDepartment)

export default departmentRouter