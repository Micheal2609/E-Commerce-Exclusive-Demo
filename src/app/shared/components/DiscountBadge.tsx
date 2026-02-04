interface DiscountBadgeProps {
    discountPercentage?: number;
}

const DiscountBadge = ({ discountPercentage }: DiscountBadgeProps) => {
    const isSShown = discountPercentage !== undefined && discountPercentage > 0;
    return (
        isSShown &&
        <span className="absolute top-0 left-0 m-3 rounded-sm w-13.75 h-6.5 bg-[#DB4444] text-white flex items-center justify-center">-{discountPercentage}%</span>
    )
}

export default DiscountBadge;