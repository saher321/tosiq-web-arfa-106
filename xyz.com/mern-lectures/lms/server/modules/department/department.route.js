import express from 'express'
import { getDepartments } from './department.controller.js'

const departmentRouter = express.Router()

departmentRouter.get("/departments", getDepartments)

export default departmentRouter