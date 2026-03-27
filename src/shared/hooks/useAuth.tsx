import { useContext } from "react";
import { AucthContext } from "../context/AuthContext";

const useAuth = () => {
    const context = useContext(AucthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export default useAuth;