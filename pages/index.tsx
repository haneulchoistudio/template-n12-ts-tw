import dynamic from 'next/dynamic'
import type { Page } from 'types'

const pageComponents = {
    containers: {
        Screen: dynamic(() => import('@component/shared/containers/Screen')),
        ScreenWrap: dynamic(
            () => import('@component/shared/containers/ScreenWrap')
        ),
    },
    layers: {
        PrimaryLayer: dynamic(
            () => import('@component/shared/layers/PrimaryLayer')
        ),
        MetaLayer: dynamic(() => import('@component/shared/layers/MetaLayer')),
        HeaderLayer: dynamic(
            () => import('@component/shared/layers/HeaderLayer')
        ),
        FooterLayer: dynamic(
            () => import('@component/shared/layers/FooterLayer')
        ),
    },
} as const

const IndexPage: Page = () => {
    return (
        <>
            <pageComponents.layers.PrimaryLayer>
                <pageComponents.layers.MetaLayer />
                <pageComponents.layers.HeaderLayer />
                <pageComponents.containers.Screen
                    variant="screen"
                    className="bg-white text-black justify-center items-center"
                >
                    <pageComponents.containers.ScreenWrap>
                        <h1 className="font-bold text-2xl text-center">
                            IndexPage
                        </h1>
                    </pageComponents.containers.ScreenWrap>
                </pageComponents.containers.Screen>
                <pageComponents.layers.FooterLayer />
            </pageComponents.layers.PrimaryLayer>
        </>
    )
}

IndexPage.getLayout = (page) => {
    return page
}

export default IndexPage
