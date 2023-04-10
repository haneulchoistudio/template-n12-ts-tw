import type { SPage, SPageSSRProps, SPageSSRPropsContext } from '@studio'

interface IndexProps {
    message: string
}

export const getServerSideProps: SPageSSRProps = async (
    _context: SPageSSRPropsContext
) => {
    return {
        props: { message: 'Hello World!' },
    }
}

const Index: SPage<IndexProps> = ({ message }: IndexProps) => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="font-extrabold text-2xl">{message}</h1>
        </div>
    )
}

Index.getLayout = (page) => {
    return page
}

export default Index
