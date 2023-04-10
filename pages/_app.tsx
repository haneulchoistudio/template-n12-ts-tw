import '@studio/styles/default.css'

import type { SAppProps } from '@studio'

const StudioApplication = (props: SAppProps) => {
    const { Component, pageProps } = props

    const getLayout = Component.getLayout || ((page) => page)

    return getLayout(<Component {...pageProps} />)
}

export default StudioApplication
