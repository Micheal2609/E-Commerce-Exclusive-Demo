import Link from "next/link";

const Header = () => {
    return (
        <>
            <div className="bg-[#000000] py-3 text-center text-white">
                <span className="px-2">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                <Link href="/sale" className="font-semibold underline">ShopNow</Link>
            </div>
        </>
    )
}

export default Header;