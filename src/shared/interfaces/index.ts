// Định nghĩa kiểu dữ liệu cho Context
interface AuthContextType {
    user: null | { id?: string; email: string; password: string };
    isLoading: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
    // register?: (name: string, email: string, password: string) => Promise<void>;
}

export type { AuthContextType };