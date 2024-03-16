"use client";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: any;
    iconPosition?: 'left' | 'right';
    variant: string;
    onClick: any;
};

const Button = ({ type, title, icon, iconPosition, variant, onClick }: ButtonProps) => {
    return (
        <button
            type={type}
            className={`flexCenter gap-3 rounded-full ${variant}`}
            onClick={onClick}
        >
            {iconPosition === 'left' && icon} <span className="bold-16 whitespace-nowrap">{title}</span> {iconPosition === 'right' && icon}
        </button>
    );
};

export default Button;
