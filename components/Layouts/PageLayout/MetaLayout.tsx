import Head from 'next/head';
import type { NextJsPageMetaOption } from 'types';

type MetaLayoutProps = NextJsPageMetaOption;

const MetaLayout: React.FC<MetaLayoutProps> = ({
    title = '',
    keywords = [],
    description = '',
    image = '',
}) => {
    return (
        <Head>
            {/* 
            
            - - - META TITLE - - -

            */}
            <meta name="og:title" property={title} />
            <title>{title}</title>
            {/* 
            
            - - - META DESCRIPTION - - -
            
            */}
            <meta name="description" property={description} />
            <meta name="og:description" property={description} />
            {/* 

            - - - META KEYWORDS - - -
            
            */}
            <meta name="keywords" property={keywords.join(', ')} />
            {/* 

            - - - META IMAGE - - -
            
            */}
            <meta name="og:image" property={image} />
        </Head>
    );
};

export default MetaLayout;
