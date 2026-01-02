import { Button, Tag, Typography } from "@/src/app/shared/components";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { ProductCardGridSection } from "./index";

const ExploreOurProductSection = () => {
    return (
        <>
            <Tag label="Explore Our Product Section" />
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
                <ProductCardGridSection />
            </div>
            <div className="my-7">
                <div className="flex justify-center">
                    <Button label="View All Products" />
                </div>
            </div>
        </>
    )
}

export default ExploreOurProductSection;