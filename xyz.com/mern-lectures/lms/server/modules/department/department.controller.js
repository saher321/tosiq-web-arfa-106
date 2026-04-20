
const departments = [
    {id: "DEPT-204221", name: "Finance", hodName: "Prof. Ali"},
    {id: "DEPT-432221", name: "Human Resource", hodName: "Dr. Alice"},
    {id: "DEPT-131221", name: "English", hodName: "Prof. Jamshaid"},
]

export const getDepartments = (req, res) => {
    return res.send({
        status: true,
        departments
    })
}