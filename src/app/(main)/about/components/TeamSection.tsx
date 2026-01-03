'use client';
import { PersonCard } from "@/src/app/shared/components/index";
import { I_Person } from "@/src/app/shared/interface/index";
import { Pagination } from "@/src/app/shared/components/index";
import { useState } from "react";

const TeamSection = () => {
    const [page, setPage] = useState(3);
    const teamMembersDataFake: I_Person[] = [
        {
            id: "1",
            name: "Nguyễn Văn A",
            role: "Founder & CEO",
            photoUrl: "/assets/images/person/image 46.png",
            bio: {
                urlLinkedin: "https://www.linkedin.com/in/nguyenvana",
                urlInstagram: "https://www.instagram.com/nguyenvana",
            },
        },
        {
            id: "2",
            name: "Trần Thị B",
            role: "CTO",
            photoUrl: "/assets/images/person/image 47.png",
            bio: {
                urlLinkedin: "https://www.linkedin.com/in/tranthib",
                urlTwitter: "https://twitter.com/tranthib",
            },
        },
        {
            id: "3",
            name: "Lê Văn C",
            role: "Product Manager",
            photoUrl: "/assets/images/person/image 51.png",
            bio: {},
        },
    ];

    const hanlePaginationChange = (page: number) => {
        console.log("Change to page:", page);
        setPage(page);
    }

    return (
        <>
            <div className="w-full flex items-center justify-evenly py-10 gap-10">
                {teamMembersDataFake.length > 0 && (
                    teamMembersDataFake.map((member) => (<PersonCard person={member} key={member.id} />))
                )}
            </div>
            <Pagination total={5} current={page} onChange={hanlePaginationChange} />
        </>
    );
}

export default TeamSection