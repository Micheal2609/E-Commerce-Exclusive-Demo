import { Button, Line, Tag, Typography } from "@/src/app/shared/components";
import ProductCardSection from "./ProductCardSection";

const BestSellingProductSection = () => {
    return (
        <>
            <Tag label="This Month" />
            <div className="flex justify-between">
                <div className="flex items-end gap-25 py-5">
                    <Typography content="Best Selling Products" />
                </div>
                    <Button label="View All" />
            </div>
            <div className="py-5">
                <ProductCardSection />
            </div>
            <Line />
        </>
    )
}
export default BestSellingProductSection;