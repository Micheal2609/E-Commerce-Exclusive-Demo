import { Image } from "antd";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GoPaperAirplane } from "react-icons/go";
import { RiLinkedinLine } from "react-icons/ri";
import { TbBrandTwitter } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="grid grid-cols-5 px-36 py-20 text-white gap-10">
        <div className="flex flex-col items-start gap-3">
          <span className="font-bold text-lg">Exclusive</span>
          <span className="text-md">Subscribe</span>
          <span className="text-sm">Get 10% off your first order</span>
          <div className="relative">
            <input
              type="text"
              className="border-white border-2 rounded p-2 pr-10 w-full bg-transparent text-white placeholder-gray-400"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white p-1"
            >
              <GoPaperAirplane />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3">
          <span className="font-bold">Support</span>
          <span className="text-sm">111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.</span>
          <span className="text-sm">exclusive@gmail.com</span>
          <span className="text-sm">+88015-88888-9999</span>
        </div>
        <div className="flex flex-col items-start gap-3">
          <span className="font-bold">Account</span>
          <span className="text-sm">My Account</span>
          <span className="text-sm">Login / Register</span>
          <span className="text-sm">Cart</span>
          <span className="text-sm">Wishlist</span>
          <span className="text-sm">Shop</span>

        </div>
        <div className="flex flex-col items-start gap-3">
          <span className="font-bold">Quick Link</span>
          <span className="text-sm">Privacy Policy</span>
          <span className="text-sm">Terms Of Use</span>
          <span className="text-sm">FAQ</span>
          <span className="text-sm">Contact</span>
        </div>
        <div className="flex flex-col items-start gap-3">
          <span className="font-bold">Download App</span>
          <span className="text-sm text-[#AFAFAF]">Save $3 with App New User Only</span>
          <div className="grid grid-cols-2">
            <div className="qr-code">
              <Image src="/assets/images/qr_code.svg" alt="QR Code" className="mb-2 cursor-pointer" preview={false} />
            </div>
            <div className="logo-brand">
              <Image src="/assets/images/chplay_pic.svg" alt="CH Play" className="mb-2 cursor-pointer" preview={false} />
              <Image src="/assets/images/appstore_pic.svg" alt="App Store" className="mb-2 cursor-pointer" preview={false} />
            </div>
          </div>
          <div className="icon-section flex gap-10">
            <button aria-label="Facebook" className="w-5 h-5 flex items-center justify-center rounded-full bg-transparent text-white transition-colors cursor-pointer">
              <FaFacebookF className="text-white text-2xl" />
            </button>
            <button aria-label="Twitter" className="w-5 h-5 flex items-center justify-center rounded-full bg-transparent text-white transition-colors cursor-pointer">
              <TbBrandTwitter className="text-white text-2xl" />
            </button>
            <button aria-label="Instagram" className="w-5 h-5 flex items-center justify-center rounded-full bg-transparent text-white transition-colors cursor-pointer">
              <FaInstagram className="text-white text-2xl" />
            </button>
            <button aria-label="LinkedIn" className="w-5 h-5 flex items-center justify-center rounded-full bg-transparent text-white transition-colors cursor-pointer">
              <RiLinkedinLine className="text-white text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="py-4 text-center">
        <span className="text-sm text-[#3D3D3D]">&#64; Copyright Rimel 2022. All right reserved</span>
      </div>
    </div >
  )
}


export default Footer
