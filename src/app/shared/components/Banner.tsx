import { Image } from 'antd'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Banner = () => {
  return (
    <div className="col-span-3 pl-11.25">
      <div className="slider">
        <div className="w-full h-full bg-black flex items-center justify-between">
          <div className="flex flex-col item-start p-10 gap-4">
            <div className="flex items-center gap-5">
              <Image src="/assets/images/icon/1200px-Apple_gray_logo 1.svg" alt="Banner Image" preview={false} />
              <span className="text-[#ffffff]">iPhone 14 Series</span>
            </div>
            <div className="text-[#ffffff] text-5xl font-semibold leading-tight">Up to 10% <br /> off Voucher</div>
            <div className="text-[#ffffff] flex items-center gap-2 cursor-pointer hover:underline">
              <span className="font-medium">Shop Now</span>
              <FaArrowRightLong />
            </div>
          </div>
          <div className="pt-5">
            <Image src="/assets/images/product/hero_endframe__cvklg0xk3w6e_large 2.png" alt="Banner Image" preview={false} className="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
