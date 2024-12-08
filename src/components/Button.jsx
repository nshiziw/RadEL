
const Button = ({
    label,
    onClick,
    type = "button",
    variant = "primary", // Variants: "primary", "secondary", "danger"
    size = "medium", // Sizes: "small", "medium", "large"
    disabled = false,
    }) => {
    // Define styles based on props
    const baseStyles =
        "px-4 py-2 focus:outline-none transition-all";
    const variantStyles = {
        primary: "bg-navy-green text-white hover:bg-navy-green-light",
        secondary: "bg-gray-500 text-white hover:bg-gray-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
    };
    const sizeStyles = {
        small: "text-sm py-1 px-3",
        medium: "text-base py-2 px-4",
        large: "text-lg py-3 px-5",
    };

    const disabledStyles = "bg-gray-300 text-gray-500 cursor-not-allowed";

    // Combine styles based on props
    const buttonStyles = `${baseStyles} ${
        disabled ? disabledStyles : variantStyles[variant]
    } ${sizeStyles[size]}`;

    return (
        <button
        type={type}
        className={buttonStyles}
        onClick={onClick}
        disabled={disabled}
        >
        {label}
        </button>
    );
};

export default Button;
