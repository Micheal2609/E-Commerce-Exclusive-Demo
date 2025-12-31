import { Image, Rate } from "antd";
import { DiscountBadge } from "./index";
import { I_Product } from "../interface";
import { FaRegHeart } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";

interface CartProductProps {
    product?: I_Product;
}

const CartProduct = ({ product }: CartProductProps) => {
    return (
        <div className="m-3 relative">
            <div className="w-67.5 h-62.5 bg-[#F5F5F5]">
                <DiscountBadge discountPercentage={product?.discount} />
                <div className="absolute top-0 right-0 gap-2 m-3 flex flex-col">
                    <button className="w-2.125 h-2.125 bg-[#FFFFFF] p-2 rounded-full"><FaRegHeart /></button>
                    <button className="w-2.125 h-2.125 bg-[#FFFFFF] p-2 rounded-full"><IoEyeOutline /></button>
                </div>
                <div className="transform translte-50% -50% flex justify-center items-center h-full">
                    <Image src={product?.imageUrl} alt="product image" />
                </div>
            </div>
            <div className="text-md font-semibold pt-4">{product?.name}</div>
            <div className="flex gap-2 py-2">
                <span className="text-[#DB4444]">${product?.currentPrice}</span>
                <span className="text-[#7D8184] line-through">{product?.originalPrice === product?.currentPrice ? null : `$${product?.originalPrice}`}</span>
            </div>
            <div className="flex gap-3">
                <Rate disabled defaultValue={product?.rated} />
                <span className="text-[#7D8184]">{`(${product?.ratedCount})`}</span>
            </div>
        </div>
    )
}

export default CartProduct;