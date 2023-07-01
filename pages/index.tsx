import type { MetaOption, Page } from 'types';
import { FiAirplay } from 'react-icons/fi';
import Button from '~/component/button/Button';
import PrimaryLayout from '~/component/layout/PrimaryLayout';
import PageLink from '~/component/link/PageLink';
import Nav from '~/component/nav/Nav';
import P from '~/component/typography/P';
import H2 from '~/component/typography/H2';
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
