'use client';
interface PaginationProps {
    pages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ pages, currentPage, onPageChange }: PaginationProps) => {
    return (
        <div className="">
            {Array.from({ length: pages }, (_, index) => index + 1).map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`mx-1 px-3 py-1 border rounded ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                >
                    {page}
                </button>
            ))}
        </div>
    );
}

export default Pagination