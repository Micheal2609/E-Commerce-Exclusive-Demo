import Link from 'next/dist/client/link'
import Image from 'next/image'
import React from 'react'
import { CiTwitter } from 'react-icons/ci'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { GoPaperAirplane } from 'react-icons/go'

const Footer = () => {
    return (
        <>
            <div className="bg-[#000000] grid grid-cols-5 gap-5 text-white px-34 py-20">
                <div className="flex flex-col gap-4">
                    <div className="font-bold text-2xl">Exclusive</div>
                    <div className="text-xl font-medium">Subscribe</div>
                    <div className="">Get 10% off your first order</div>
                    <div className="email-input relative">
                        <input className='border-2 border-[#ffffff] px-4 py-3 rounded-md' type="email" placeholder="Enter your email" />
                        <button className='absolute top-1/2 right-12 transform -translate-y-1/2 w-6 h-6'>
                            <GoPaperAirplane className='w-full h-full' />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="font-bold text-2xl">Support</div>
                    <div className="">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</div>
                    <div className="">exclusive@gmail.com</div>
                    <div className="">+88015-88888-9999</div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="font-bold text-2xl">Account</div>
                    <div className="">My Account</div>
                    <div className="">Login / Register</div>
                    <div className="">Cart</div>
                    <div className="">Wishlist</div>
                    <div className="">Shop</div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="font-bold text-2xl">Quick Link</div>
                    <div className="">Privacy Policy</div>
                    <div className="">Terms Of Use</div>
                    <div className="">FAQ</div>
                    <div className="">Contact</div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="font-bold text-2xl">Download App</div>
                    <div className="text-sx text-[#7D8184]">Save $3 with App New User Only</div>
                    <div className="logo-and-qr grid grid-cols-2">
                        <div className="qr">
                            <Image src="/assets/images/qr-code.jpg" alt="QR Code" width={100} height={100} />
                        </div>
                        <div className="stores grid grid-rows-2">
                            <div className="app-store flex items-center justify-center">
                                <Image src="/assets/images/google-play.jpg" alt="App Store" width={100} height={100} />
                            </div>
                            <div className="chplay-store flex items-center justify-center">
                                <Image src="/assets/images/app-store.jpg" alt="Google Play Store" width={100} height={100} />
                            </div>
                        </div>
                    </div>
                    <div className="icons grid grid-cols-4">
                        <Link href={'#'}>
                            <div className="w-6 h-6">
                                <FaFacebookF className='w-full h-full' />
                            </div>
                        </Link>
                        <Link href={'#'}>
                            <div className="w-6 h-6">
                                <CiTwitter className='w-full h-full' />
                            </div>
                        </Link>
                        <Link href={'#'}>
                            <div className="w-6 h-6">
                                <FaInstagram className='w-full h-full' />
                            </div>
                        </Link>
                        <Link href={'#'}>
                            <div className="w-6 h-6">
                                <FaLinkedinIn className='w-full h-full' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-[#000000] text-[#7D8184] text-center py-6">
                &#64; Copyright Rimel 2022. All right reserved
            </div>
        </>
    )
}

export default Footer
