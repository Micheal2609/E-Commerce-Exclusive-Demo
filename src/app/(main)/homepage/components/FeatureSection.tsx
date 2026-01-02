import { Tag, Typography } from "@/src/app/shared/components";
import MediaCardSection from "./MediaCardSection";

const FeatureSection = () => {
    return (
        <>
            <Tag label="Featured" />
            <div className="flex justify-between">
                <div className="flex items-end gap-25 py-5">
                    <Typography content="New Arrival" />
                </div>
            </div>
            <div className="py-5">
                <MediaCardSection />
            </div>
        </>
    )

}

export default FeatureSection;