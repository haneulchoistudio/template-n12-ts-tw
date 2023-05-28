import { classnames } from '@/helper'

interface IScreen {
    variant: 'min-screen' | 'screen' | 'auto'
    className?: string
    children: React.ReactNode
}

const Screen = ({ children, variant, className = '' }: IScreen) => {
    return (
        <div
            className={classnames(
                'w-full flex flex-col',
                variant === 'min-screen' && 'min-h-screen',
                variant === 'screen' && 'h-screen',
                variant === 'auto' && 'h-auto',
                className
            )}
        >
            {children}
        </div>
    )
}

export default Screen
