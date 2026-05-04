import Student from "./student.model.js"

export const getStudents = async (req, res) => {

    const students = await Student.find({});

    return res.send({
        status: true,
        students
    })
}

export const addStudent = async (req, res) => {
    const { name, email, phone } = req.body
    try {
        const newStudent = await Student.create({ name, email, phone });
        if (newStudent) {
            return res.send({
                status: true,
                message: "Student added successfully"
            }) 
        } else {
            return res.send({
                status: false,
                message: "Failed to add student"
            }) 
        }
    } catch (error) {
        console.log("Err: ", error)
        return res.send({
            status: false,
            message: "Network error"
        })
    }
}

export const singleStudent = async (req, res) => {
    const { id } = req.params
    
    try {
        const student = await Student.findById({ _id: id })
        if (!student)
            return res.send({
                status: false,
                message: "Student not found"
            })
            
        return res.send({
            status: true,
            student
        })
        
    } catch (error) {
        console.log("ERR: ", error)
    }
}

export const updateStudent = async (req, res) => {
    const { _id, name, email, phone } = req.body
    try {
        const student = await Student.findByIdAndUpdate({ _id }, {name, email, phone}, {new: true})
        if (!student)
            return res.send({
                status: false,
                message: "Failed to update student"
            })
            
        return res.send({
            status: true,
            message: "Student has been updated"
        })
        
    } catch (error) {
        console.log("ERR: ", error)
    }
}

export const delStudent = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        const student = await Student.findByIdAndDelete({ _id: id })
        if (student) {
            return res.send({
                status: true,
                message: "Data has been deleted"
            })
        } else {
            return res.send({
                status: false,
                message: "Data not found"
            })            
        }
    } catch (error) {
        console.log("Err: ", error)
    }
}