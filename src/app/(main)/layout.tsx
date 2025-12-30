import { MainLayout } from "../shared/layout"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <MainLayout>{children}</MainLayout>
    )
}

export default RootLayout