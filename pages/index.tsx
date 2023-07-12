import type { NextJsPage, NextJsPageMetaOption } from 'types';
import MetaLayout from '~/component/Layouts/PageLayout/MetaLayout';
import PageLayout from '~/component/Layouts/PageLayout/PageLayout';
import TextVariant from '~/component/Variants/TextVariant/TextVariant';

const metadata: NextJsPageMetaOption = {
    title: '',
    description: '',
    keywords: [],
    image: '',
};

const Homepage: NextJsPage = () => {
    return (
        <>
            <MetaLayout {...metadata} />
            <PageLayout>
                <div className="h-screen flex flex-col justify-center items-center">
                    <TextVariant variant="h1" className="mb-1 lg:mb-2">
                        Yo Yo!
                    </TextVariant>
                    <TextVariant className="text-neutral-500">
                        This is a sample nextjs 12 template.
                    </TextVariant>
                </div>
            </PageLayout>
        </>
    );
};

Homepage.getLayout = (page) => {
    return page;
};

export default Homepage;
