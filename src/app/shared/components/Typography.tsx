interface TypographyProps {
    content?: string
}
const Typography = (props: TypographyProps) => {
    return (
        <div className="text-4xl font-semibold">{props.content}</div>
    )
}

export default Typography;