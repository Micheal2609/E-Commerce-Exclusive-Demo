import { Button, CountDownTimer } from "@/src/app/shared/components";
import { Image } from "antd";

const BrandSection = () => {
    const flashSaleEndAt = new Date();
    flashSaleEndAt.setDate(flashSaleEndAt.getDate() + 5); // Flash sale ends in 5 days
    return (
        <div className="bg-[#000000] flex items-center justify-between my-10 p-14">
            <div className="">
                <div className="text-[#00FF66] font-semibold py-5">Categories</div>
                <div className="text-[#FFFFFF] text-5xl font-semibold py-5">Enhance Your <br /> Music Experience</div>
                <div className="py-5">
                    <CountDownTimer endAt={flashSaleEndAt} type="round" />
                </div>
                <div className="py-5">
                    <Button label="Buy Now" backgroundColor="#00FF66" color="#FFFFFF" />
                </div>
            </div>
            <div className="relative flex items-center justify-center">
                {/* Nền xám mờ */}
                <div className="absolute w-120 h-120 rounded-full bg-[#6c6868] blur-3xl opacity-70"></div>

                {/* Ảnh loa */}
                <Image
                    src="/assets/images/product/jlb_boombox_hero.png"
                    alt="Speaker"
                    className="relative z-10"
                    preview={false}
                />
            </div>
        </div>
    )
}
export default BrandSection;