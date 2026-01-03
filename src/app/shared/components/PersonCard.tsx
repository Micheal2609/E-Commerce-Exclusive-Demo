import { Image } from "antd";
import { I_Person } from "../interface/index";
import Link from "antd/es/typography/Link";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";

interface PersonCardProps {
    key?: string;
    person: I_Person;
}
const PersonCard = ({ person, key = "" }: PersonCardProps) => {
    return (
        <div key={key} className="flex flex-col items-start gap-3">
            <div className="flex items-center justify-center bg-[#F5F5F5] px-10 pt-10">
                <Image src={person.photoUrl} alt={person.name} preview={false} />
            </div>
            <div className="text-3xl font-medium">{person.name}</div>
            <div>{person.role}</div>
            <div className="flex items-center gap-4">
                <Link href={person.bio.urlTwitter || "#"}>
                    <FiTwitter className="text-black w-6 h-6"/>
                    {/* <div className="">
                        <Image src="/assets/icons/linkedin.svg" alt="Twitter" preview={false} />
                    </div> */}
                </Link>
                <Link href={person.bio.urlInstagram || "#"}>
                    <FaInstagram className="text-black w-6 h-6"/>
                    {/* <div className="">
                        <Image src="/assets/icons/linkedin.svg" alt="Instagram" preview={false} />
                    </div> */}
                </Link>
                <Link href={person.bio.urlLinkedin || "#"}>
                    <RiLinkedinLine className="text-black w-6 h-6"/>
                    {/* <div className="">
                        <Image src="/assets/icons/linkedin.svg" alt="LinkedIn" preview={false} />
                    </div> */}
                </Link>
            </div>
        </div>
    )
}

export default PersonCard