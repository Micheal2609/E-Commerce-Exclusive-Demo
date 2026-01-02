interface ButtonProps {
    label?: string;
    backgroundColor?: string;
    color?: string;
    className?: string;
    icon?: React.ReactNode;
}
const Button = ({ label, backgroundColor = "#DB4444", color = "#FFFFFF", className = "", icon = null }: ButtonProps) => {
    const bgClass = `bg-[${backgroundColor}]`;
    const textClass = `text-[${color}]`;
    return (
        <span
            role="button"
            className={`inline-flex items-center justify-center gap-2 font-medium cursor-pointer px-12 py-4 my-5 ${bgClass} ${textClass} ${className}`}
        >
            {icon && <span className="inline-flex items-center">{icon}</span>}
            {label}
        </span>
    )
}

export default Button;