// AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });
    
    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);
    
    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const foundUser = users.find(u => u.email === email && u.password === password);
        
        if (foundUser) {
            setUser(foundUser);
            return true;
        }
        return false;
    };

    const register = (name, email, password, role) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        
        if (users.find(u => u.email === email)) {
            return false;
        }
        
        const newUser = { name, email, password, role };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        setUser(newUser);
        return true;
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
