import { BrandCard } from "@/src/app/shared/components";
import { I_Brand } from "@/src/app/shared/interface";

const BrandCardSection = () => {
    const dataFake: I_Brand[] = [
        { id: 1, brand: "Apple", attribute: "Electronics", urlImage: "/assets/images/category/Category-CellPhone.svg" },
        { id: 2, brand: "Nike", attribute: "Sportswear", urlImage: "/assets/images/category/Category-Headphone.svg" },
        { id: 3, brand: "Gucci", attribute: "Luxury", urlImage: "/assets/images/category/Category-Computer.svg" },
        { id: 4, brand: "Samsung", attribute: "Electronics", urlImage: "/assets/images/category/Category-SmartWatch.svg" },
        { id: 5, brand: "Sony", attribute: "Gaming", urlImage: "/assets/images/category/Category-Gamepad.svg" },
        { id: 6, brand: "Ikea", attribute: "Furniture", urlImage: "/assets/images/category/Category-Camera.svg" },
    ];
    return (
        <div className="flex gap-10 overflow-hidden overflow-x-scroll">
            {dataFake && dataFake.map((item) => <BrandCard brand={item} key={item.id} />)}
        </div>
    )
}

export default BrandCardSection;