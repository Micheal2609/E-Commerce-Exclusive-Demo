import { Banner, SideBar } from "@/src/app/shared/components";

const BannerSection = () => {
    return <>
        <div className="grid grid-cols-4 px-36 py-3">
            <SideBar />
            <Banner />
        </div>
    </>
}

export default BannerSection