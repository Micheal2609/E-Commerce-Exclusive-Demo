'use client';
import { createContext, useCallback, useEffect, useState } from "react";
import { AuthContextType } from "../interfaces";
import { useRouter } from "next/navigation";

// Định nghĩa context để có thể cung cấp hoặc cho phép các component khác đọc thông tin
const AucthContext = createContext<AuthContextType | null>(null);


const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState({ id: "", email: "", password: "" });
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    const logout = useCallback(() => {
        localStorage.removeItem("token");
        setUser({ id: "", email: "", password: "" });
        router.push("/login");
    }, [router]);
    const login = useCallback((email: string, password: string) => {
        setUser({ id: "", email, password });
        localStorage.setItem("token", "fake-token");
        router.push("/home");
    }, [router]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const checkAuth = async () => {
            if (token) {
            } else {
                // router.push("/home");
            }
            setIsLoading(false);
        };
        checkAuth();
    }, [router]);
    return (
        <AucthContext.Provider value={{ user, isLoading, login, logout }}>
            {children}
        </AucthContext.Provider>
    );
}

export { AuthProvider as default, AucthContext };