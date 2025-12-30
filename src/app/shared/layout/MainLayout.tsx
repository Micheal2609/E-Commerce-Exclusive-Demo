import { Footer, Header, Navbar } from "./index"
import { PropsWithChildren } from "react"

const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="w-full">
            <Header />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default MainLayout