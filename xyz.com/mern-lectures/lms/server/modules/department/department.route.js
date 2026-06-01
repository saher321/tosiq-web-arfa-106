import express from 'express'
import { getDepartments, delDepartment, addDepartment, singleDepartment, updateDepartment } from './department.controller.js'
import { authMiddleware } from '../../middlewares/authMiddleware.js'

const departmentRouter = express.Router()

departmentRouter.get("/departments", getDepartments)
departmentRouter.post("/departments/add", authMiddleware, addDepartment)
departmentRouter.delete("/departments/delete/:id", authMiddleware, delDepartment)
departmentRouter.get("/departments/edit/:id", singleDepartment)
departmentRouter.patch("/departments/update", updateDepartment)

export default departmentRouter