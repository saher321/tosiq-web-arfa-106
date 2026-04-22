
// const departments = [
//     {id: "DEPT-204221", name: "Finance", hodName: "Prof. Ali"},
//     {id: "DEPT-432221", name: "Human Resource", hodName: "Dr. Alice"},
//     {id: "DEPT-131221", name: "Arts", hodName: "Prof. Jamshaid"},
// ]

import Department from "./department.model.js"

export const getDepartments = async (req, res) => {

    const departments = await Department.find({});

    return res.send({
        status: true,
        departments
    })
}

export const delDepartment = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        const dept = await Department.findByIdAndDelete({ _id: id })
        if (dept) {
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