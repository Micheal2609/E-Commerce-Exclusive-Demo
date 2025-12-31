import { Banner, SideBar } from "@/src/app/shared/components";

const BannerSection = () => {
    return <>
        <div className="grid grid-cols-4 pb-10">
            <SideBar />
            <Banner />
        </div>
    </>
}

export default BannerSection