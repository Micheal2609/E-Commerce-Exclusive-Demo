import Link from "next/link";

interface MenuProps {
    classname?: string;
}

const Menu = ({ classname = '' }: MenuProps) => {
    return (
        <div className={`${classname} absolute top-12 right-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50`}>
            <ul className="flex flex-col p-0 m-0! list-none bg-white/0">
                <li>
                    <Link href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                        <span></span>
                        <span className="text-sm">Manage My Account</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                        <span></span>
                        <span className="text-sm">My Order</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                        <span></span>
                        <span className="text-sm">My Cancellations</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                        <span></span>
                        <span className="text-sm">My Reviews</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                        <span></span>
                        <span className="text-sm">Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;