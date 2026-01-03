import { Line } from "@/src/app/shared/components/index";
import { Image } from "antd";

const InformationSection = () => {
    return (
        <div className="col-span-1 flex flex-col items-start gap-5 border border-gray-200/40 shadow-xl rounded-md p-10">
            <div className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-full bg-[#DB4444] flex items-center justify-center">
                    <Image src="/assets/images/icon/Phone.svg" alt="Contact Information Icon" className="brightness-0 invert" preview={false} />
                </div>
                <div className="font-med">Contact Information</div>
            </div>
            <div className="text-sm">We are available 24/7, 7 days a week.</div>
            <div className="text-sm">Phone: +8801611112222</div>
            <Line />
            <div className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-full bg-[#DB4444] flex items-center justify-center">
                    <Image src="/assets/images/icon/Mail.svg" alt="Contact Information Icon" className="brightness-0 invert" preview={false} />
                </div>
                <div className="font-med">Write To US</div>
            </div>
            <div className="text-sm">Fill out our form and we will contact you within 24 hours.</div>
            <div className="text-sm">Emails: customer@exclusive.com</div>
            <div className="text-sm">Emails: support@exclusive.com</div>
        </div>
    )
}

export default InformationSection;