import Link from 'next/link'

const HeaderLayer = () => {
    return (
        <header className="w-full fixed top-0 z-40 left-0 bg-white">
            <section className="px-4 py-4 2xl:px-0 max-w-cutoff mx-auto w-full flex justify-between items-center">
                <h1>
                    <Link href={'/'}>Header</Link>
                </h1>
            </section>
        </header>
    )
}

export default HeaderLayer
