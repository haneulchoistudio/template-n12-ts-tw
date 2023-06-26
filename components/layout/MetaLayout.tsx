import Head from 'next/head';
import { MetaOption } from 'types';

type MetaLayoutProps = MetaOption;

const MetaLayout: React.FC<MetaLayoutProps> = ({
    title,
    description,
    image,
    keywords,
}) => {
    return (
        <Head>
            {/* image */}
            <meta key="og:image" property={image} />
            {/* keywords */}
            <meta key="keywords" property={keywords.join(', ')} />
            {/* description */}
            <meta key="og:description" property={description} />
            <meta key="description" property={description} />
            {/* title */}
            <meta key="og:title" property={title} />
            <title>{title}</title>
        </Head>
    );
};

export default MetaLayout;
