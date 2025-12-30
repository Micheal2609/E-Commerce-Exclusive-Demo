import { GoPaperAirplane } from "react-icons/go";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-5 px-36 py-3 bg-black text-white gap-10">
        <div className="flex flex-col items-start gap-3">
          <span className="font-bold text-lg">Exclusive</span>
          <span className="text-md">Subscribe</span>
          <span className="text-sm">Get 10% off your first order</span>
          <div className="relative">
            <input type="text" className="border-white border-2 rounded p-2" />
            <button >
              <GoPaperAirplane className="absolute right-2 top-1/2 transform -translate-y-1/2"/>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <span className="font-bold">Support</span>
        </div>
        <div className="flex flex-col items-start">
          <span className="font-bold">Support</span>
        </div>
        <div className="flex flex-col items-start">
          <span className="font-bold">Support</span>
        </div>
        <div className="flex flex-col items-start">
          <span className="font-bold">Support</span>
        </div>
      </div>
    </div>
  )
}


export default Footer
