const THEME = "THEME";

export const getTheme = () => {
    const theme = localStorage.getItem(THEME);
    return theme ?? true;
};

export const setTheme = (theme) => {
    return localStorage.setItem(THEME, theme);
};

export const clearTheme = () => {
    return localStorage.clear(THEME);
};