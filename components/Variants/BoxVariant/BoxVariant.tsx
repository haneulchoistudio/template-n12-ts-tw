import { twMerge } from 'tailwind-merge';
import type { BoxVariant } from './types';
import BoxVariantStyle from './BoxVariant.module.css';

interface BoxVariantProps {
    variant?: BoxVariant;
    className?: string;
    children?: React.ReactNode;
}

const BoxVariant: React.FC<BoxVariantProps> = ({
    variant = 'div',
    className = '',
    children = null,
}) => {
    const boxVariants = {
        div: (
            <div className={twMerge(BoxVariantStyle.div, className)}>
                {children}
            </div>
        ),
        section: (
            <section className={twMerge(BoxVariantStyle.section, className)}>
                {children}
            </section>
        ),
        article: (
            <article className={twMerge(BoxVariantStyle.article, className)}>
                {children}
            </article>
        ),
        span: (
            <span className={twMerge(BoxVariantStyle.span, className)}>
                {children}
            </span>
        ),
    } as const;

    return boxVariants[variant];
};

export default BoxVariant;
