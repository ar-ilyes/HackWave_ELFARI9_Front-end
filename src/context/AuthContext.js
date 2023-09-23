"use client"
import { createContext, useState } from "react";

const AuthContext = createContext();
const dummyNames = ['go', 'bruh', 'wow', 'good']
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: dummyNames[Math.floor(Math.random() * dummyNames.length)]
    });

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;