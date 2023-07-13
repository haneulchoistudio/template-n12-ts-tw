/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import type { NextJsPageMetaOption } from 'types';
import MetaLayout from '~/component/Layouts/PageLayout/MetaLayout';
import PageLayout from '~/component/Layouts/PageLayout/PageLayout';
import BoxVariant from '~/component/Variants/BoxVariant/BoxVariant';
import TextVariant from '~/component/Variants/TextVariant/TextVariant';

const ErrorPage = ({ statusCode, requestedPage }) => {
    const errorCodes = {
        404: {
            code: 404,
            title: 'Page Not Found | 404',
            description: `The page you requested is not found.`,
        },
        500: {
            code: 500,
            title: 'Server Error | 500',
            description: 'There was an error during the server action.',
        },
    } as const;

    const metadata: NextJsPageMetaOption = {
        title: errorCodes[statusCode].title,
    };

    const router = useRouter();

    useEffect(() => {
        router.replace({
            query: {
                statusCode,
                requestedPage,
            },
        });
    }, []);

    return (
        <>
            <MetaLayout {...metadata} />
            <PageLayout>
                <BoxVariant className="h-screen flex flex-col justify-center">
                    <BoxVariant
                        variant="section"
                        className="px-5 py-6 max-w-cutoff mx-auto"
                    >
                        <BoxVariant
                            variant="article"
                            className="flex flex-col justify-center items-center"
                        >
                            <TextVariant variant="h3">
                                {errorCodes[statusCode].title}
                            </TextVariant>

                            <TextVariant className="text-pink-500">
                                {errorCodes[statusCode].description}{' '}
                                <Link
                                    href={'/'}
                                    className="text-blue-500 font-medium lg:hover:underline"
                                >
                                    Go back
                                </Link>
                            </TextVariant>
                        </BoxVariant>
                    </BoxVariant>
                </BoxVariant>
            </PageLayout>
        </>
    );
};

ErrorPage.getInitialProps = ({ res, err, asPath }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    const requestedPage = asPath
        .slice(1, asPath.length - 1)
        .replaceAll('/', '-');
    return {
        statusCode,
        requestedPage,
    };
};

export default ErrorPage;
