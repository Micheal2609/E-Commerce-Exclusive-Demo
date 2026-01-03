import { Image } from "antd";
import { I_Stats } from "../interface";
interface CardStatsProps {
    key?: number | string;
    stats: I_Stats;
}

const CardStats = ({ key, stats }: CardStatsProps) => {
    return (
        <div key={key} className="group flex flex-col items-center justify-center border rounded-md w-67.5 h-57.5 border-[#828282] hover:bg-[#DB4444]">
            <div className="rounded-full bg-[#F2F2F2] p-3 group-hover:bg-[rgba(242,242,242,0.5)] transition-colors duration-200">
                <div className="bg-[#000000] group-hover:bg-white rounded-full p-2 transition-colors duration-200">
                    <Image src={stats.urlImage} alt={stats.label} preview={false} className="filter invert group-hover:invert-0 group-hover:brightness-100 transition-all duration-200" />
                </div>
            </div>
            <span className="text-3xl font-bold text-gray-900 group-hover:text-white">{stats.value}</span>
            <span className="text-lg text-gray-600 group-hover:text-white">{stats.label}</span>
        </div>
    );
};
export default CardStats;