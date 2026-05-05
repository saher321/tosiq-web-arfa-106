import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    image: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
}, {timestamps: true})

const Student = mongoose.model('Student', studentSchema);
export default Student;