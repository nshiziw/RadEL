const Button = ({
    label,
    onClick,
    type = "button",
    className = "",
}) => {
    return (
        <button
            className={`py-4 px-8 text-snow transition hover:bg-navy-green-light ${className}`}
            type={type}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
