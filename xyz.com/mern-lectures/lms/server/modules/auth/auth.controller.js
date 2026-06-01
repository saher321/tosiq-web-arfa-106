import User from "./auth.model.js"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { generateOTP, sendEmail } from "../../utils/common.js";
dotenv.config()

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
    const { email, password } = req.body
    if (!email || !password) {
        return res.send({
            status: false,
            message: "All fields are required"
        })
    }

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.send({
                status: false,
                message: "User doesn't exist with this email"
            })
        }
        // ali1234
        // $fhshfs898hff.rrf9-44f44f4f4
        const salt = await bcrypt.genSalt(10);
        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) {
            return res.send({
                status: false,
                message: "Your password is miss-matched"
            })
        }

        const token = jwt.sign(
            { user: { id: user._id, name: user.fullname, email: user.email  } }, 
            process.env.SECRET_KEY, 
            { expiresIn: "7d" });
        // duig220fh2fh9c2fd22f2ffw-r23.f23f23f2df7yffw.3f3cf3hnbyb09b9
        const html = `
        Your account has been loggedin, if this was not you then contact to system administrator
        `
        // sendEmail(user.email, "Login alert message", html)

        return res.send({
            status: true,
            message: "Loggedin successful",
            user,
            token,
        })
        
    } catch (error) {
        
        console.log("ERR:", error)
    }
}

export const forgotPassword = async (req, res) => {
    const { email } = req.body
    if (!email) {
        return res.send({
            status: false,
            message: "Provide valid email"
        })
    }
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.send({
                status: false,
                message: "User doesn't exist with this email"
            })
        }

        const otp = generateOTP()
        const content = `
        Your requested OTP code <br>
        <h3> ${otp} </h3>
        <em> <strong>Note: Please do not share this OTP to anyone</strong> </em>
        `
        user.otp = otp
        user.is_otp_verified = false
        await user.save()

        sendEmail(user.email, "Reset password OTP 🔑", content)

        return res.send({
            status: true,
            message: "OTP send to your email"
        })
        
    } catch (error) {
        console.log("ERR:", error)
    }
}

export const resetPassword = async (req, res) => {
    const { email, otp, newPassword } = req.body
    if (!otp || !newPassword) {
        return res.send({
            status: false,
            message: "All fields are required"
        })
    }
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.send({
                status: false,
                message: "User doesn't exist with this email"
            })
        }

        if (user.otp != otp) {
            return res.send({
                status: false,
                message: "OTP code is invalid"
            })
        }

        const salt = await bcrypt.genSalt(10);
        const encPassword = await bcrypt.hash(newPassword, salt);

        user.password = encPassword
        user.otp = null
        user.is_otp_verified = true
        await user.save()

        return res.send({
            status: true,
            message: "Your password has been reset"
        })
        
    } catch (error) {
        console.log("ERR:", error)
    }
}