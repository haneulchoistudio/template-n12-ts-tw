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

    type ThemeLight = 'light'
    type ThemeDark = 'dark'
    type ThemeOption = [ThemeDark, ThemeLight][number]

    type LanguageOption<T extends string[]> = ['en'][number] | T[number]

    type LocalStorageContextProps<T extends object = {}> = T & {
        children: React.ReactNode
        localStorageKey: string
    }
}
