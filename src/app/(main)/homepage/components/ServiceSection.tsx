import { Image } from "antd";

const ServiceSection = () => {
    return (
        <>
            <div className="flex justify-evenly items-center gap-2 p-5">
                <div className="flex flex-col items-center">
                    <div className="bg-[#000000] border-[#7D8184] border-10 p-2 flex flex-col items-center rounded-full w-20 h-20">
                        <Image src="/assets/images/icon/qr_code.svg" alt="service-icon-1" preview={false} />
                    </div>
                    <div className="text-xl font-semibold">FREE AND FAST DELIVERY</div>
                    <div className="text-sm">Free delivery for all orders over $140</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-[#000000] border-[#7D8184] border-10 p-2 flex flex-col items-center rounded-full w-20 h-20">
                        <Image src="/assets/images/icon/Icon-Customer service.svg" alt="service-icon-1" preview={false} />
                    </div>
                    <div className="text-xl font-semibold">24/7 CUSTOMER SERVICE</div>
                    <div className="text-sm">Friendly 24/7 customer support</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-[#000000] border-[#7D8184] border-10 p-2 flex flex-col items-center rounded-full w-20 h-20">
                        <Image src="/assets/images/icon/Icon-secure.svg" alt="service-icon-1" preview={false} />
                    </div>
                    <div className="text-xl font-semibold">MONEY BACK GUARANTEE</div>
                    <div className="text-sm">We reurn money within 30 days</div>
                </div>
            </div>
        </>
    );
};

export default ServiceSection;

