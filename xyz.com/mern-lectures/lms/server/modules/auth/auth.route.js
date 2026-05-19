import express from 'express'
import { login, register } from './auth.controller.js';

const authRouter = express.Router();

authRouter.post('/auth/signup', register)
authRouter.post('/auth/login', login)

export default authRouter