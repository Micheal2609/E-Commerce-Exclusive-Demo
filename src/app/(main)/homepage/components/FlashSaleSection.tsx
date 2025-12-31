import { Typography, Tag, CountDownTimer } from "@/src/app/shared/components"


const FlashSaleSection = () => {
    const flashSaleEndAt = new Date();
    flashSaleEndAt.setDate(flashSaleEndAt.getDate() + 5); // Flash sale ends in 5 days
    return (
        <div>
            <Tag label="Today's" />
            <div className="flex items-end gap-25">
                <Typography content="Flash Sale" />
                <CountDownTimer endAt={flashSaleEndAt} isRunning={true} />
            </div>
        </div>
    )
}

export default FlashSaleSection
