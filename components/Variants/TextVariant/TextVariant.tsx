import TextVariantStyle from './TextVariant.module.css';
import { twMerge } from 'tailwind-merge';
import type { TextVariant } from './types';

interface TextVariantProps {
    variant?: TextVariant;
    className?: string;
    children: React.ReactNode;
}

const TextVariant: React.FC<TextVariantProps> = ({
    children,
    className = '',
    variant = 'p',
}) => {
    const textVariants = {
        h1: (
            <h1 className={twMerge(TextVariantStyle['h1-base'], className)}>
                {children}
            </h1>
        ),
        h2: (
            <h2 className={twMerge(TextVariantStyle['h2-base'], className)}>
                {children}
            </h2>
        ),
        h3: (
            <h3 className={twMerge(TextVariantStyle['h3-base'], className)}>
                {children}
            </h3>
        ),
        h4: (
            <h4 className={twMerge(TextVariantStyle['h4-base'], className)}>
                {children}
            </h4>
        ),
        h5: (
            <h5 className={twMerge(TextVariantStyle['h5-base'], className)}>
                {children}
            </h5>
        ),
        h6: (
            <h6 className={twMerge(TextVariantStyle['h6-base'], className)}>
                {children}
            </h6>
        ),
        p: (
            <p className={twMerge(TextVariantStyle['p-base'], className)}>
                {children}
            </p>
        ),
        span: (
            <span className={twMerge(TextVariantStyle['span-base'], className)}>
                {children}
            </span>
        ),
    } as const;

    return textVariants[variant];
};

export default TextVariant;
