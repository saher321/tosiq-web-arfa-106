import express from 'express'
import { register } from './auth.controller.js';

const authRouter = express.Router();

authRouter.post('/auth/signup', register)

export default authRouter