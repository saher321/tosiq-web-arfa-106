import nodemailer from 'nodemailer'
import { customAlphabet } from 'nanoid'
import dotenv from 'dotenv'
dotenv.config()


export const generateOTP = () => {
    const nanoid = customAlphabet('1234567890', 6)
    const otpCode = nanoid() //=> "123456"
    return otpCode
}

export const sendEmail = async (to, subject, html) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const info = await transporter.sendMail({
            from: `"LMS PORTAL" <${process.env.EMAIL_USER}>`, // sender address
            to: to, // list of recipients
            subject: subject, // subject line
            html: html, // HTML body
        });

        console.log("Message sent: %s", info.messageId);
        // Preview URL is only available when using an Ethereal test account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    } catch (error) {
        console.log("ERR:", error)
    }
}