import React from "react";

const Navbar= () => {
    return (
        <nav className="grid grid-cols-3 items-center p-3 border-b border-gray-200 bg-white">
            {/* 3 equally sized columns: logo | menu | search+icons */}
            <div className="flex items-center justify-center">
                <div className="flex items-center gap-3">
                    <div
                        aria-hidden={true}
                        className="w-10 h-10 bg-gray-900 text-white flex items-center justify-center rounded-md font-bold"
                    >
                        E
                    </div>
                    <span className="text-lg text font-bold">Exclusive</span>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <ul className="flex gap-3 items-center list-none m-0!">
                    <li>
                        <a href="#" className="text-gray-900 no-underline px-4 hover:underline">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-900 no-underline px-4 hover:underline">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-900 no-underline px-4 hover:underline">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-900 no-underline px-4 hover:underline">
                            Sign Up
                        </a>
                    </li>
                </ul>
            </div>

            <div className="flex items-center justify-end gap-3">
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
                    aria-label="Giỏ hàng"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-transparent cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#111"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden={true}
                    >
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                </button>

                <button
                    aria-label="Tài khoản"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-transparent cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#111"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden={true}
                    >
                        <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
