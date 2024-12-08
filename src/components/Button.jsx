const Button = ({
    label,
    onClick,
    type = "button",
    className = "", // Accept a custom className
}) => {
  // Define styles based on props
    return (
        <button
        className={`bg-navy-green hover:bg-navy-green-light transition py-4 px-8 text-snow ${className}`}
        type={type}
        onClick={onClick}
        >
        {label}
        </button>
    );
    };

export default Button;
