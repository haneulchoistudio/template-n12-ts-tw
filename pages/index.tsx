import PrimaryLayout from '@/component/layout/PrimaryLayout';
import type { MetaOption, Page } from 'types';

const metadata: MetaOption = {
    title: 'NextJS TailwindCSS and TypeScript Template',
    description: 'Create Nextjs application usign this template.',
    keywords: ['NextJS', 'Tailwind', 'TypeScript'],
};

const Homepage: Page = () => {
    return (
        <PrimaryLayout metadata={metadata}>
            <h3 className="p-6 text-2xl font-medium leading-relaxed">
                NextJS, TailwindCSS, and TypeScript Template
            </h3>
        </PrimaryLayout>
    );
};

Homepage.getLayout = (page) => {
    return page;
};

export default Homepage;
