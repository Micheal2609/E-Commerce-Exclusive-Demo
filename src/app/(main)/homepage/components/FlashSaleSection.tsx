import { Typography, Tag, CountDownTimer } from "@/src/app/shared/components"
import { ProductCardSection } from "./index";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";


const FlashSaleSection = () => {
    const flashSaleEndAt = new Date();
    flashSaleEndAt.setDate(flashSaleEndAt.getDate() + 5); // Flash sale ends in 5 days
    return (
        <div>
            <Tag label="Today's" />
            <div className="flex justify-between">
                <div className="flex items-end gap-25">
                    <Typography content="Flash Sale" />
                    <CountDownTimer endAt={flashSaleEndAt} isRunning={true} />
                </div>
                <div className="flex items-center gap-2">
                    <button className="rounded-full bg-[#F5F5F5] p-3 w-2.875 h-2.875 cursor-pointer hover:bg-[#cdcdcd]"><FaArrowLeftLong /></button>
                    <button className="rounded-full bg-[#F5F5F5] p-3 w-2.875 h-2.875 cursor-pointer hover:bg-[#cdcdcd]"><FaArrowRightLong /></button>
                </div>
            </div>
            <div className="py-5">
                <ProductCardSection />
            </div>
        </div>
    )
}

export default FlashSaleSection
