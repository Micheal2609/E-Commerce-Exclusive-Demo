interface ButtonProps {
    label?: string;
    backgroundColor?: string;
    color?: string;
    className?: string;
}
const Button = ({ label, backgroundColor = "#DB4444", color = "#FFFFFF", className = "" }: ButtonProps) => {
    return (
        <span className={`text-[${color}] font-medium cursor-pointer bg-[${backgroundColor}] px-12 py-4 my-5 ${className}`}>{label}</span>
    )
}

export default Button;