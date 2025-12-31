interface TypographyProps {
    content?: string
}
const Typography = (props: TypographyProps) => {
    return (
        <div className="text-4xl font-bold">{props.content}</div>
    )
}

export default Typography;