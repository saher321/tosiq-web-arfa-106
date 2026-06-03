import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const useAuth = () => {

    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("Use auth is invalid call")
    }

    return context;
}

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(() => {
        const currentUser = localStorage.getItem("lms_user")
        return currentUser ? JSON.parse(currentUser) : null
    })

    const login = (token, currentUser) => {
        localStorage.setItem("lms_token", token);
        localStorage.setItem("lms_user", JSON.stringify(currentUser));
        setUser(currentUser)
    }

    // json.stringify => { name: "ali", age: 32 } :: string

    const logout = () => {
        localStorage.removeItem("lms_token");
        localStorage.removeItem("lms_user");
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, logout, login}}>
            { children }
        </AuthContext.Provider>
    )
}