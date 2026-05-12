const BASE_URL = "http://localhost:5000"

// auth
export const REGISTER_API       = BASE_URL + '/auth/signup'
export const LOGIN_API          = BASE_URL + '/auth/login'

// department apis
export const ALL_DEPT_API       = BASE_URL + '/departments'
export const ADD_DEPT_API       = BASE_URL + '/departments/add'
export const EDIT_DEPT_API      = BASE_URL + '/departments/edit'
export const UPDATE_DEPT_API    = BASE_URL + '/departments/update'
export const DEL_DEPT_API       = BASE_URL + '/departments/delete'

// student apis
export const ALL_STD_API        = BASE_URL + '/students'
export const ADD_STD_API        = BASE_URL + '/students/add'
export const EDIT_STD_API       = BASE_URL + '/students/edit'
export const UPDATE_STD_API     = BASE_URL + '/students/update'
export const DEL_STD_API        = BASE_URL + '/students/delete'