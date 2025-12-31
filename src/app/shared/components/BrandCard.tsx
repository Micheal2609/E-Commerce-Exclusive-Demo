import Image from "next/image";
import type { I_Brand } from "../interface";

interface BrandCardProps {
    brand: I_Brand;
}
const BrandCard = ({ brand }: BrandCardProps) => {
    return (
        <div className="border-2 text-black rounded-sm border-[#E0E0E0] w-50 h-50 hover:bg-[#DB4444] hover:text-white group">
            <div className="flex flex-col justify-center items-center h-full">
                {/* Use next/image with a positioned parent so we can apply Tailwind filters on the img */}
                <div className="w-28 h-28 relative">
                    <Image
                        src={brand?.urlImage ?? "/assets/images/category/Category-CellPhone.png"}
                        alt={brand?.brand ?? "brand"}
                        fill
                        className="object-contain filter transition duration-200 group-hover:invert group-hover:brightness-0"
                        sizes="112px"
                    />
                </div>
                <div className="text-center py-3 group-hover:text-white">{brand?.brand}</div>
            </div>
        </div>
    )
}
export default BrandCard;