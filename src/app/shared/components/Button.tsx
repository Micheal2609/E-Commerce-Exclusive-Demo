interface ButtonProps {
    label?: string;
    backgroundColor?: string;
    color?: string;
}
const Button = ({ label, backgroundColor = "#DB4444", color = "#FFFFFF" }: ButtonProps) => {
    return (
        <span className={`text-[${color}] font-medium cursor-pointer bg-[${backgroundColor}] px-12 py-4 my-5`}>{label}</span>
    )
}

export default Button;