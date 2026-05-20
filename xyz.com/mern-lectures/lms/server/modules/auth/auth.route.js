import express from 'express'
import { forgotPassword, login, register, resetPassword } from './auth.controller.js';

const authRouter = express.Router();

authRouter.post('/auth/signup', register)
authRouter.post('/auth/login', login)
authRouter.post('/auth/forgot-password', forgotPassword)
authRouter.post('/auth/reset-password', resetPassword)

export default authRouter