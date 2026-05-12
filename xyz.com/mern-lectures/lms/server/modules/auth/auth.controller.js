import User from "./auth.model.js"
import bcrypt from "bcryptjs";
export const register = async (req, res) => {
    const { fullname, email, password } = req.body
    if (!fullname || !email || !password) {
        return res.send({
            status: false,
            message: "All fields are required"
        })
    }

    try {
        const user = await User.findOne({ email })
        if (user) {
            return res.send({
                status: false,
                message: "User exist with this email"
            })
        }
        // ali1234
        // $fhshfs898hff.rrf9-44f44f4f4
        const salt = await bcrypt.genSalt(10);
        const encPassword = await bcrypt.hash(password, salt);
        // Store hash in your password DB

        const data = await User.create({
            fullname,
            email,
            password: encPassword
        })

        if (data) {
            return res.send({
                status: true,
                message: "Registration successful"
            })
        }
        
        return res.send({
            status: false,
            message: "Failed to register"
        })

    } catch (error) {
        
        console.log("ERR:", error)
    }
}

export const login = async (req, res) => {
    
}

export const forgotPassword = async (req, res) => {
    
}

export const resetPassword = async (req, res) => {
    
}