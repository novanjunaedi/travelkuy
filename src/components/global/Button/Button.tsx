"use client";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: any;
    iconPosition?: 'left' | 'right';
    variant: string;
    onClick?: any;
    full?: boolean;
};

const Button = ({ type, title, icon, iconPosition, variant, full, onClick }: ButtonProps) => {
    return (
        <button
            type={type}
            className={`flexCenter gap-3 rounded-full ${variant} ${full && 'w-full'}`}
            onClick={onClick}
        >
            {iconPosition === 'left' && icon} <span className="bold-16 whitespace-nowrap cursor-pointer">{title}</span> {iconPosition === 'right' && icon}
        </button>
    );
};

export default Button;
