import { classnames } from '@helper'

interface IGrid {
    children: React.ReactNode
    className?: string
}

const Grid = ({ children, className = '' }: IGrid) => {
    return (
        <div className={classnames('w-full grid', className)}>{children}</div>
    )
}

export default Grid
