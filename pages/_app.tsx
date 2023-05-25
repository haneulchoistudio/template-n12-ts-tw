import '@style'
import { AnimatePresence } from 'framer-motion'

import type { Props } from 'types'

const StudioApplication = (props: Props) => {
    const { Component, pageProps } = props

    const getLayout = Component.getLayout || ((page) => page)

    return (
        <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
        >
            {getLayout(<Component {...pageProps} />)}
        </AnimatePresence>
    )
}

export default StudioApplication
