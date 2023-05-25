import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

declare module 'types' {
    type Page<P = unknown, IP = P> = NextPage<P, IP> & {
        layout?: React.ComponentType
        getLayout?: (_page: React.ReactElement) => React.ReactNode
    }
    type Props<P = Record<string, unknown>> = {
        Component: Page
    } & AppProps<P>
}
