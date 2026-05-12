import mongoose from 'mongoose'

const authSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        default: true
    },
    otp: { // 123456
        type: String,
        default: null
    },
    is_otp_verified: { // true || false
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const User = mongoose.model('User', authSchema);
export default User;