'use client';
import Button from "./Button";

const Error404 = () => {
    const handleReturnHome = () => {
        window.location.href = '/homepage';
    };
    return (
        <div className="flex flex-col items-center my-20">
            <div className="text-[110px] font-medium">404 Not Found</div>
            <div className="mt-10 mb-20">Your visited page not found. You may go home page.</div>
            <Button label="Back to home page" onClick={handleReturnHome} className="font-medium"/>
        </div>
    );
};

export default Error404;