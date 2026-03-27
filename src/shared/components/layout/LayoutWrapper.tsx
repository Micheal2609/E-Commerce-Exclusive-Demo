import { Suspense } from "react";
import AuthProvider from "../../context/AuthContext";

export default function LayoutWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        // Trạng thái chờ xác thực người dùng, Tránh việc trang web bị "trắng xóa" khi đang tải dữ liệu nặng.
        <Suspense>
            {/* Xác thực người dùng  */}
            <AuthProvider>
                {children}
            </AuthProvider>
        </Suspense>
    );
}
