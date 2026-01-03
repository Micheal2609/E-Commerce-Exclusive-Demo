'use client';

interface PaginationDotsProps {
    total: number;
    current: number;
    onChange: (page: number) => void;
}

export default function PaginationDots({ total, current, onChange }: PaginationDotsProps) {
    return (
        <div className="flex items-center justify-center gap-1 py-4">
            {Array.from({ length: total }).map((_, index) => {
                const page = index + 1;
                const isActive = page === current;

                return (
                    <button
                        key={page}
                        onClick={() => onChange(page)}
                        className={`
                            relative flex items-center justify-center
                            transition-all duration-200
                            ${isActive ? "w-6 h-6" : "w-6 h-6"}
                        `}
                    >
                        {isActive && (
                            <span className="
                                absolute inset-0 rounded-full 
                                border-3 border-gray-300
                            " />
                        )}

                        <span
                            className={`
                                block rounded-full 
                                transition-all duration-200
                                ${isActive ? "bg-[#CC3333] w-3.5 h-3.5" : "bg-gray-400 w-3 h-3"}
                            `}
                        />
                    </button>
                );
            })}
        </div>
    );
}
