import dynamic from 'next/dynamic'
import type { Page } from 'types'

const PageComponent = {
    Container: {
        Screen: dynamic(() => import('@/global-component/Containers/Screen')),
        ScreenWrap: dynamic(
            () => import('@/global-component/Containers/ScreenWrap')
        ),
    },
    Layer: {
        Primary: dynamic(() => import('@/global-component/Layers/Primary')),
        Meta: dynamic(() => import('@/global-component/Layers/Meta')),
        Header: dynamic(() => import('@/global-component/Layers/Header')),
        Footer: dynamic(() => import('@/global-component/Layers/Footer')),
    },
}

const IndexPage: Page = () => {
    return (
        <>
            <PageComponent.Layer.Primary>
                <PageComponent.Layer.Meta />
                <PageComponent.Layer.Header />
                <PageComponent.Container.Screen
                    variant="screen"
                    className="bg-white text-black justify-center items-center"
                >
                    <PageComponent.Container.ScreenWrap>
                        <div className="font-sans text-xl lg:text-2xl w-max mx-auto">
                            IndexPage
                        </div>
                    </PageComponent.Container.ScreenWrap>
                </PageComponent.Container.Screen>
                <PageComponent.Layer.Footer />
            </PageComponent.Layer.Primary>
        </>
    )
}

IndexPage.getLayout = (page) => {
    return page
}

export default IndexPage
