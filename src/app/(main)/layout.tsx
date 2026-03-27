import { MainLayout } from "@/src/shared/components/layout/components";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <MainLayout>
            {children}
        </MainLayout>
    )
}

export default RootLayout;