'use client';
import { PersonCard } from "@/src/app/shared/components/index";
import { I_Person } from "@/src/app/shared/interface/index";
import { Pagination } from "antd";
import { useState } from "react";

const TeamSection = () => {
    const [page, setPage] =  useState(3);
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
            {/* <Pagination pages={5} currentPage={1} onPageChange={hanlePaginationChange} /> */}
            <Pagination
                align="center"
                current={page}
                onChange={hanlePaginationChange}
                total={5} // total items
                pageSize={1} // mỗi trang 1 item -> số trang = total
                showSizeChanger={false}
                itemRender={(p, type, originalElement) => {
                    if (type === 'page') {
                        return (
                            <button
                                type="button"
                                className="w-3 h-3 rounded-full mx-1 bg-gray-300"
                                aria-current={p === page ? 'true' : undefined}
                            >
                                <div className={`rounded-full w-2.5 h-2.5 ${p === page ? 'bg-[#B44444]' : 'bg-gray-300'}`}></div>
                            </button>
                        );
                    }
                    return originalElement;
                }}
            />
        </>
    );
}

export default TeamSection