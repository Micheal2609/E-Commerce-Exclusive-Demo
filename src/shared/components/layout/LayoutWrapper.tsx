import { Suspense } from "react";
import AuthProvider from "../../context/AuthContext";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export default function LayoutWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // Đăng ký Ant Design để sử dụng các component của thư viện này trong toàn bộ ứng dụng.
        <AntdRegistry>
            {/* Trạng thái chờ xác thực người dùng, Tránh việc trang web bị "trắng xóa" khi đang tải dữ liệu nặng. */}
            <Suspense>
                {/* Xác thực người dùng  */}
                <AuthProvider>
                    {children}
                </AuthProvider>
            </Suspense>
        </AntdRegistry>
    );
}
