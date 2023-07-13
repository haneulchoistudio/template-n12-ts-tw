import { twMerge } from 'tailwind-merge';
import ButtonStyle from './Button.module.css';

interface ButtonProps {
    onClick?: () => void;
    className?: string;

    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    className = '',
    children,
}) => {
    return (
        <button
            onClick={onClick}
            className={twMerge(ButtonStyle.main, className)}
        >
            {children}
        </button>
    );
};

export default Button;
