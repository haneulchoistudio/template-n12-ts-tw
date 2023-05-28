import Head from 'next/head'

interface IMetaLayer {
    title?: string
    description?: string
    keywords?: string[]
    image?: string
}

const MetaLayer = ({
    title = '',
    description = '',
    image = '',
    keywords = [],
}: IMetaLayer) => {
    return (
        <Head>
            <meta name="keywords" content={keywords.join(', ')} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:title" content={title} />
            <meta name="description" content={description} />
            <title>{title}</title>
        </Head>
    )
}

export default MetaLayer
