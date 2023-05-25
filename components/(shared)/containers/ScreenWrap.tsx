import { classnames } from '@helper'

interface IScreenWrap {
    className?: string
    children: React.ReactNode
}

const ScreenWrap = ({ children, className = '' }: IScreenWrap) => {
    return (
        <section
            className={classnames(
                'w-full px-8 py-16 lg:py-24 2xl:py-32 2xl:px-0 max-w-cutoff mx-auto',
                className
            )}
        >
            {children}
        </section>
    )
}

export default ScreenWrap
