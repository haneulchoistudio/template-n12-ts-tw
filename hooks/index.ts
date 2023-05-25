import { __useInput__ } from './use-input'

class Hook {
    public static useInput: <
        T extends string = string,
        E extends [
            HTMLInputElement,
            HTMLTextAreaElement
        ][number] = HTMLInputElement
    >(
        value: T,
        option?: { placeholder?: string }
    ) => {
        value: T | ''
        onChange: (e: React.ChangeEvent<E>) => void
        onReset: () => void
        placeholder: string
    }
}

Hook.useInput = __useInput__
export const useInput = Hook.useInput
