import { Button, Tag } from "@/src/app/shared/components/index";
import { ProductCardSection } from "../../homepage/components";

const JusForYouSection = () => {
    return (
        <>
            <div className="flex justify-between">
                <div className="flex items-end gap-25 py-5">
                    <Tag label="Just For You" />
                </div>
                <div className="flex items-center gap-2">
                    <Button label="See All" backgroundColor="#FFFFFF" color="#000000" className="border-2" />
                </div>
            </div>
            <div className="py-5">
                <ProductCardSection />
            </div>
        </>
    )
}
export default JusForYouSection;