import { Button } from "@/src/app/shared/components/index";
import { ProductCardSection } from "../../homepage/components";

const WishlistSection = () => {
    return (
        <>
            <div className="flex justify-between">
                <div className="flex items-end gap-25 py-5">
                    <span className="text-xl">Wishlist (4)</span>
                </div>
                <div className="flex items-center gap-2">
                    <Button label="View All Wishlist Items" backgroundColor="#FFFFFF" color="#000000" className="border-2" />
                </div>
            </div>
            <div className="py-5">
                <ProductCardSection />
            </div>
        </>
    )
}
export default WishlistSection;