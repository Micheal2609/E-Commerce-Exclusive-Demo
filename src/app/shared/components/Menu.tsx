import Link from "next/link";

interface MenuProps {
    classname?: string;
}

const Menu = ({ classname = '' }: MenuProps) => {
    return (
        <div className={`${classname} absolute top-12 right-0 w-48 bg-linear-to-b from-white/20 via-white/10 to-white/5 backdrop-blur-3xl border border-white/20 rounded-xl shadow-lg z-50`}>
            <ul className="flex flex-col p-0 m-0! list-none">
                <li>
                    <Link href="#" className="flex items-center gap-2 px-4 py-2">
                        <span></span>
                        <span className="text-sm text-white">Manage My Account</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="flex items-center gap-2 px-4 py-2">
                        <span></span>
                        <span className="text-sm text-white">My Order</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="flex items-center gap-2 px-4 py-2">
                        <span></span>
                        <span className="text-sm text-white">My Cancellations</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="flex items-center gap-2 px-4 py-2">
                        <span></span>
                        <span className="text-sm text-white">My Reviews</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="flex items-center gap-2 px-4 py-2">
                        <span></span>
                        <span className="text-sm text-white">Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
