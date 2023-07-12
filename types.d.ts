import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

export type NextJsPage<P = unknown, IP = P> = NextPage<P, IP> & {
    layout?: React.ComponentType;
    getLayout?: (_page: React.ReactElement) => React.ReactNode;
};
export type NextJsPageProps<P = Record<string, unknown>> = {
    Component: NextJsPage;
} & AppProps<P>;

export type NextJsPageMetaOption<
    AdditionalMetaOption extends object = unknown
> = AdditionalMetaOption & {
    title?: string;
    description?: string;
    image?: string;
    keywords: Array<string>;
};
