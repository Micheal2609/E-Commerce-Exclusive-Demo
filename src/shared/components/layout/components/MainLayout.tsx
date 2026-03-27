import { Header, Footer, Navigation } from "./index";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <div className="px-34">
                <Navigation />
                {children}
            </div>
            <Footer />
        </>
    )
}

export default MainLayout;