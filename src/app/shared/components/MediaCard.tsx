import { Image } from "antd";

const MediaCard = () => {
    return (
        <div className="grid grid-cols-2 gap-5">
            <div className="bg-[#000000] relative boroder border-2 flex items-end justify-center">
                <div className="w-127.75 h-127.75 flex items-end justify-center">
                    <Image src="/assets/images/product/ps5-slim-goedkope-playstation_large 1.png" alt="banner-1" preview={false} />
                </div>
                <div className="text-[#ffffff] absolute bottom-0 left-0 p-8 flex flex-col gap-4">
                    <div className="text-2xl font-semibold">PlayStation 5</div>
                    <div className="text-sm">Black and White version of the PS5 <br /> coming out on sale.</div>
                    <div className="font-medium">Shop Now</div>
                </div>
            </div>
            <div className="grid grid-rows-2 gap-5">
                <div className="bg-[#000000] relative boroder border-2 flex items-end justify-end">
                    <div className="w-108 h-71.5">
                        <Image src="/assets/images/product/attractive-woman-wearing-hat-posing-black-background 1.png" alt="banner-1" preview={false} />
                    </div>
                    <div className="text-[#ffffff] absolute bottom-0 left-0 p-8 flex flex-col gap-4">
                        <div className="text-2xl font-semibold">Women’s Collections</div>
                        <div className="text-sm">Featured woman collections that <br /> give you another vibe.</div>
                        <div className="font-medium">Shop Now</div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div className="bg-[#000000] boroder border-2 relative flex items-center justify-center">
                        <div className="w-45 h-55.25">
                            <Image src="/assets/images/product/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png" alt="banner-1" preview={false} />
                        </div>
                        <div className="text-[#ffffff] absolute bottom-0 left-0 p-8 flex flex-col gap-4">
                            <div className="text-2xl font-semibold">Speakers</div>
                            <div className="text-sm">Amazon wireless speakers</div>
                            <div className="font-medium">Shop Now</div>
                        </div>
                    </div>
                    <div className="bg-[#000000] boroder border-2 relative flex items-center justify-center">
                        <div className="w-50.25 h-50.75">
                            <Image src="/assets/images/product/652e82cd70aa6522dd785109a455904c.png" alt="banner-1" preview={false} />
                        </div>
                        <div className="text-[#ffffff] absolute bottom-0 left-0 p-8 flex flex-col gap-4">
                            <div className="text-2xl font-semibold">Perfume</div>
                            <div className="text-sm">GUCCI INTENSE OUD EDP</div>
                            <div className="font-medium">Shop Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaCard