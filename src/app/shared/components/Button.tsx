interface ButtonProps {
    label?: string;
}
const Button = ({ label }: ButtonProps) => {
    return (
        <div className="flex justify-center">
            <span className="text-[#FFFFFF] font-medium cursor-pointer bg-[#DB4444] px-12 py-4 my-5">{label}</span>
        </div>
    )
}

export default Button;