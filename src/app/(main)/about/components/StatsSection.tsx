import { CardStats } from "@/src/app/shared/components";
import { I_Stats } from "@/src/app/shared/interface/index";

const StatsSection = () => {
    const dataFake: I_Stats[] = [
        { id: 1, urlImage: '/assets/images/icon/icon_shop.svg', label: 'Customers', value: '1,200+' },
        { id: 2, urlImage: '/assets/images/icon/icon-Moneybag.svg', label: 'Projects', value: '80+' },
        { id: 3, urlImage: '/assets/images/icon/icon-Sale.svg', label: 'Awards', value: '15+' },
        { id: 4, urlImage: '/assets/images/icon/icon-Shopping bag.svg', label: 'Years of Experience', value: '10+' },
    ];
    return (
        <div className="flex justify-evenly items-center gap-5 my-10">
            {dataFake.length > 0 && dataFake.map((item) => (<CardStats key={item.id} stats={item} />))}
        </div>
    )
};
export default StatsSection;