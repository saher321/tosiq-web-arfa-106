import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.send({
                status: false,
                message: "Unauthorized! please login again"
            })
        }
    try {

        console.log("TOKEN: ", authHeader.split(" ")[1])
        const token = authHeader.split(" ")[1]
        if (!token) {
            return res.send({
                status: false,
                message: "Unauthorized! please login again"
            })
        }
        // verify token
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        console.log("DECODED: ", decoded)
        req.user = decoded
        next()
        
    } catch (error) {
        console.log("ERR:", error)
        return res.send({
            status: false,
            message: "Unauthorized! please login again"
        })
    }
}