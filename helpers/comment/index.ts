export function __comment__(comment: string): { render: boolean } {
    if (!comment)
        console.log('CommentNotProvided: Will not render the component.')

    return {
        render: comment ? true : false,
    }
}
