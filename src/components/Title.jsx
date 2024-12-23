export const Title = ({
    title
}) => {
    return (
        <div className="flex justify-center items-center">
            <h1 className="font-italiana text-3xl text-navy-green-dark">{title}</h1>
        </div>
    )
}

export const SubTitle = ({
    title, subtitle
}) => {
    return (
        <div>
            <h2 className="font-medium text-4xl text-navy-green-dark">{title}</h2>
            <p className="text-slate-600">{subtitle}</p>
        </div>
    )
}
