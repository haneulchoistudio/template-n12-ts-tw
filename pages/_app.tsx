import '~/style';
import { LanguageContextProvider, ThemeContextProvider } from '~/context';
import { AnimatePresence } from 'framer-motion';
import type { NextJsPageProps } from 'types';

const StudioApplication = (props: NextJsPageProps) => {
    const { Component, pageProps } = props;

    const getLayout = Component.getLayout || ((page) => page);

    return (
        <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
        >
            <ThemeContextProvider localStorageKey="theme">
                <LanguageContextProvider localStorageKey="language">
                    {getLayout(<Component {...pageProps} />)}
                </LanguageContextProvider>
            </ThemeContextProvider>
        </AnimatePresence>
    );
};

export default StudioApplication;
