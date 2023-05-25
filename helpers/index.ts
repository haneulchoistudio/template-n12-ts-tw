import { __classnames__ } from './classnames'
import { __comment__ } from './comment'

class Helper {
    public static classnames: (...classNames: string[]) => string
    public static comment: (message: string) => { render: boolean }
}

Helper.classnames = __classnames__
export const classnames = Helper.classnames

Helper.comment = __comment__
export const comment = Helper.comment
