import mongoose from 'mongoose'

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    hodName: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
}, {timestamps: true})

const Department = mongoose.model('Department', departmentSchema);
export default Department;