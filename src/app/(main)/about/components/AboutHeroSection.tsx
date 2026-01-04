import { Image } from "antd";

const AboutHeroSection = () => {
    return (
        <div className="grid grid-cols-2 gap-5 my-10">
            <div className="flex flex-col gap-6 justify-center items-start p-10">
                <div className="text-5xl font-semibold">Our Story</div>
                <p style={{
                    fontFamily: 'Poppins'
                }}>Our Story
                    Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                </p>
                <p style={{
                    fontFamily: 'Poppins'
                }}>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            </div>
            <div className="">
                <Image src="/assets/images/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png" alt="About Hero Image" preview={false} />
            </div>
        </div>
    );
}

export default AboutHeroSection;