import { classnames } from '@helper'

interface IFlex {
    className?: string
    children: React.ReactNode
}

const Flex = ({ children, className = '' }: IFlex) => {
    return (
        <article className={classnames('w-full flex', className)}>
            {children}
        </article>
    )
}

export default Flex
