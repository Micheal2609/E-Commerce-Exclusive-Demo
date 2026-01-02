import { Image } from "antd";
import Link from "antd/es/typography/Link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="grid grid-cols-4 items-center px-36 py-3 border-b border-gray-200 bg-white">
            {/* 3 equally sized columns: logo | menu | search+icons */}
            <div className="col-span-1 flex items-center justify-start">
                <Link href="/" className="no-underline text-black! flex items-center gap-3">
                    <div
                        aria-hidden={true}
                        className="w-10 h-10 bg-gray-900 text-white flex items-center justify-center rounded-md font-bold"
                    >
                        E
                    </div>
                    <span className="text-lg text font-bold">Exclusive</span>
                </Link>
            </div>

            <div className="col-span-2 flex items-center justify-center">
                <ul className="flex gap-10 items-center list-none m-0!">
                    <li>
                        <Link href="#" className="text-gray-900! text-lg! no-underline px-4 hover:underline">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-gray-900! text-lg! no-underline px-4 hover:underline">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-gray-900! text-lg! no-underline px-4 hover:underline">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-gray-900! text-lg! no-underline px-4 hover:underline">
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="col-span-1 flex items-center justify-end gap-2">
                <label htmlFor="nav-search" className="sr-only">
                    Tìm kiếm
                </label>
                <div className="flex items-center gap-2 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#6b7280"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden={true}
                    >
                        <circle cx="11" cy="11" r="7" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        id="nav-search"
                        type="search"
                        placeholder="Tìm kiếm..."
                        className="bg-transparent outline-none border-none w-56"
                    />
                </div>

                <button
                    aria-label="Yêu thích"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-transparent cursor-pointer"
                >
                    <Image src="/assets/images/icon/Wishlist.svg" alt="Cart Icon" width={30} height={30} preview={false} />
                </button>
                <button
                    aria-label="Giỏ hàng"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-transparent cursor-pointer"
                >
                    <Image src="/assets/images/icon/Cart1 with buy.svg" alt="Cart Icon" width={30} height={30} preview={false} />
                </button>

                <button
                    aria-label="Tài khoản"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-transparent cursor-pointer"
                >
                    <Image src="/assets/images/icon/user.svg" alt="Cart Icon" width={30} height={30} preview={false} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
