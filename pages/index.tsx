import Screen from '@component/shared/Screen'
import ScreenWrap from '@component/shared/ScreenWrap'
import type { Page } from 'types'

const IndexPage: Page = () => {
    return (
        <Screen
            variant="screen"
            className="bg-slate-50 text-slate-800 justify-center items-center"
        >
            <ScreenWrap>
                <h1 className="font-bold text-2xl text-center">IndexPage</h1>
            </ScreenWrap>
        </Screen>
    )
}

IndexPage.getLayout = (page) => {
    return page
}

export default IndexPage
