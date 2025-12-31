import { Line, Tag, Typography } from "@/src/app/shared/components";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { BrandCardSection } from "./index";

const BrowseByCategorySection = () => {
    return (
        <>
            <Tag label="Categories" />
            <div className="flex justify-between">
                <div className="flex items-end gap-25 py-5">
                    <Typography content="Browse By Category" />
                </div>
                <div className="flex items-center gap-2">
                    <button className="rounded-full bg-[#F5F5F5] p-3 w-2.875 h-2.875 cursor-pointer hover:bg-[#cdcdcd]"><FaArrowLeftLong /></button>
                    <button className="rounded-full bg-[#F5F5F5] p-3 w-2.875 h-2.875 cursor-pointer hover:bg-[#cdcdcd]"><FaArrowRightLong /></button>
                </div>
            </div>
            <div className="py-5">
                <BrandCardSection />
            </div>
            <Line />
        </>
    )
}
export default BrowseByCategorySection;