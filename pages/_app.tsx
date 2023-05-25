import '@style'

import type { Props } from 'types'

const StudioApplication = (props: Props) => {
    const { Component, pageProps } = props

    const getLayout = Component.getLayout || ((page) => page)

    return getLayout(<Component {...pageProps} />)
}

export default StudioApplication
