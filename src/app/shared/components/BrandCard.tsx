import { Image } from "antd";
import { I_Brand } from "../interface";

interface BrandCardProps {
    brand: I_Brand;
}
const BrandCard = ({ brand }: BrandCardProps) => {
    return (
        <div className="border-2 text-black rounded-sm border-[#E0E0E0] w-50 h-50 hover:bg-[#DB4444] hover:text-white">
            <div className="flex flex-col justify-center items-center h-full">
                <Image src={brand?.urlImage} alt={brand?.brand} />
                <div className="text-center py-3">{brand?.brand}</div>
            </div>
        </div>
    )
}
export default BrandCard;