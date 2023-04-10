import type {
    NextPage,
    GetServerSideProps,
    GetServerSidePropsContext,
} from 'next'
import type { AppProps } from 'next/app'

declare module '@studio' {
    type SPage<P = unknown, IP = P> = NextPage<P, IP> & {
        layout?: React.ComponentType
        getLayout?: (_page: React.ReactElement) => React.ReactNode
    }
    type SAppProps<P = Record<string, unknown>> = {
        Component: SPage
    } & AppProps<P>
    type SPageSSRProps = GetServerSideProps
    type SPageSSRPropsContext = GetServerSidePropsContext
}
