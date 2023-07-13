import { useState } from 'react';
import type { NextJsPage, NextJsPageMetaOption } from 'types';
import Button from '~/component/Buttons/Button';
import MetaLayout from '~/component/Layouts/PageLayout/MetaLayout';
import PageLayout from '~/component/Layouts/PageLayout/PageLayout';
import Modal from '~/component/Modals/Modal';
import BoxVariant from '~/component/Variants/BoxVariant/BoxVariant';
import TextVariant from '~/component/Variants/TextVariant/TextVariant';

const metadata: NextJsPageMetaOption = {
    title: '',
    description: '',
    keywords: [],
    image: '',
};

const Homepage: NextJsPage = () => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <>
            <MetaLayout {...metadata} />
            <PageLayout>
                <BoxVariant className="h-screen flex flex-col justify-center items-center">
                    <TextVariant variant="h1" className="mb-1 lg:mb-2">
                        Yo Yo!
                    </TextVariant>
                    <TextVariant className="text-neutral-500">
                        This is a sample nextjs 12 template.
                    </TextVariant>

                    <Button onClick={() => setShow(true)}>Open Modal</Button>
                    {show && (
                        <Modal
                            onHide={() => setShow(false)}
                            show={show}
                            className="bg-neutral-900"
                        >
                            <BoxVariant
                                variant="article"
                                className="max-w-[500px] mx-auto flex flex-col justify-center items-center text-white"
                            >
                                <TextVariant
                                    variant="h1"
                                    className="mb-1 lg:mb-2"
                                >
                                    Yo Yo!
                                </TextVariant>
                                <TextVariant className="text-neutral-500">
                                    This is a sample nextjs 12 template.
                                </TextVariant>
                            </BoxVariant>
                        </Modal>
                    )}
                </BoxVariant>
            </PageLayout>
        </>
    );
};

Homepage.getLayout = (page) => {
    return page;
};

export default Homepage;
