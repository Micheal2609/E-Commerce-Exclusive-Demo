'use client';
import { useEffect, useState } from "react";
import { Image } from "antd";
import Link from "antd/es/typography/Link";
import { Menu } from "../components";

const Navbar = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [isLoginedIn, setIsLoggedIn] = useState(false);

    const handleChangeLoginStatus = (status: boolean) => {
        setIsLoggedIn(status);
    }

    // useEffect(() => {
    //     if (localStorage.getItem("token")) {
    //         handleChangeLoginStatus(true);
    //     } else {
    //         handleChangeLoginStatus(false);
    //     }
    // }, [isLoginedIn]);


    const handleToggleMenu = (isSelected: boolean) => {
        console.log("isSelected", isSelected);
        setIsSelected(isSelected);
    }
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

            <div className="col-span-3 flex items-center justify-center">
                <div className="flex justify-between w-full">
                    <div className="col-span-1 pl-11.25">
                        <ul className="flex gap-10 items-center list-none m-0!">
                            <li>
                                <Link href="/homepage" className="text-gray-900! text-lg! no-underline px-4 hover:underline! leading-loose">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-900! text-lg! no-underline px-4 hover:underline! leading-loose">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-900! text-lg! no-underline px-4 hover:underline! leading-loose">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/auth/sign-up" className="text-gray-900! text-lg! no-underline px-4 hover:underline! leading-loose">
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1 flex items-center justify-end gap-2">
                        <div className="flex items-center gap-2 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50">
                            <input
                                id="nav-search"
                                type="search"
                                placeholder="What are you looking for?"
                                className="bg-transparent outline-none border-none w-56"
                            />
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
                        </div>

                        <Link
                            href="/wishlist"
                            aria-label="Yêu thích"
                            className="group inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent cursor-pointer hover:bg-[#DB4444]!"
                        >
                            <Image className="transition-all duration-150 filter group-hover:brightness-0 group-hover:invert" src="/assets/images/icon/Wishlist.svg" alt="Wishlist Icon" preview={false} />
                        </Link>
                        <Link
                            aria-label="Giỏ hàng"
                            className="group inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent cursor-pointer hover:bg-[#DB4444]!"
                        >
                            <Image className="transition-all duration-150 filter group-hover:brightness-0 group-hover:invert" src="/assets/images/icon/Cart1 with buy.svg" alt="Cart Icon" preview={false} />
                        </Link>

                        {
                            isLoginedIn && <div
                                aria-label="Tài khoản"
                                className="group inline-flex items-center justify-center w-10 h-10 bg-transparent cursor-pointer rounded-full relative hover:bg-[#DB4444]!"
                                onClick={() => handleToggleMenu(!isSelected)}
                            >
                                <Image className="transition-all duration-150 filter group-hover:brightness-0 group-hover:invert w-full h-full" src="/assets/images/icon/user.svg" alt="User Icon" preview={false} />
                                {isSelected && <Menu />}
                            </div>
                        }
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
