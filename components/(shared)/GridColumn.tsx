import { classnames } from '@helper'

interface IGridColumn {
    children: React.ReactNode
    className?: string
}

const GridColumn = ({ children, className = '' }: IGridColumn) => {
    return <div className={classnames('w-full', className)}>{children}</div>
}

export default GridColumn
