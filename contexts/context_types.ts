type ThemeLight = 'light';
type ThemeDark = 'dark';
export type ThemeOption = [ThemeDark, ThemeLight][number];
export type LanguageOption<T extends string[]> = ['en'][number] | T[number];
export type LocalStorageContextProps<T extends object = object> = T & {
    children: React.ReactNode;
    localStorageKey: string;
};
