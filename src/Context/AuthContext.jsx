import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("registeredUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("registeredUser", JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("registeredUser");
    };

    return(
        <AuthContext.Provider value = {{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};