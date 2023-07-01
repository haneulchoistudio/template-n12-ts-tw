import type { MetaOption, Page } from 'types';
import PrimaryLayout from '~/component/layout/PrimaryLayout';
import HeroText from '~/component/page/HeroText';

const metadata: MetaOption = {
    title: 'NextJS TailwindCSS and TypeScript Template',
    description: 'Create Nextjs application usign this template.',
    keywords: ['NextJS', 'Tailwind', 'TypeScript'],
};

const Homepage: Page = () => {
    return (
        <PrimaryLayout metadata={metadata}>
            <HeroText title="NextJS 12, Tailwindcss, and TypeScript Template" />
        </PrimaryLayout>
    );
};

Homepage.getLayout = (page) => {
    return page;
};

export default Homepage;
