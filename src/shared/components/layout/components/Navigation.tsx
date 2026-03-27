import Link from 'next/link'
import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { IoCartOutline } from 'react-icons/io5'

const Navigation = () => {
    return (
        <>
            <div className="grid grid-cols-3 text-[#000000] py-5">
                <div className="logo">
                    <span className='font-bold text-2xl text-'>Exclusive</span>
                </div>
                <div className="menus">
                    <ul className='flex items-center gap-6'>
                        <li>
                            <Link href={'/'} className='hover:underline transition-all: ease-in-out 3s'>Home</Link>
                        </li>
                        <li>
                            <Link href={'/shop'} className='hover:underline transition-all: ease-in-out 3s'>Shop</Link>
                        </li>
                        <li>
                            <Link href={'/about'} className='hover:underline transition-all: ease-in-out 3s'>About</Link>
                        </li>
                        <li>
                            <Link href={'/contact'} className='hover:underline transition-all: ease-in-out 3s'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="actions flex justify-end items-center gap-6">
                    <div className="search-input relative max-w-60.75 flex-1">
                        <input className='bg-[#F5F5F5] py-2.5 px-5 rounded-sm w-full text-xs' type="text" placeholder="What are you looking for?" />
                        <button className='search-btn w-6 h-6 absolute top-1/2 right-4 transform -translate-y-1/2'>
                            <HiMagnifyingGlass className='w-full h-full'/>
                        </button>
                    </div>
                    <div className="wishlist-btn flex items-center justify-center">
                        <button className='w-6 h-6'>
                            <CiHeart className='w-full h-full' />
                        </button>
                    </div>
                    <div className="cart-btn flex items-center justify-center">
                        <button className='w-6 h-6'>
                            <IoCartOutline className='w-full h-full'/>
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navigation
