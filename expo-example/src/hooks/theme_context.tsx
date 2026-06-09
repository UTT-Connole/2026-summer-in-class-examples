import React, { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

export type ThemeMode = 'light' | 'dark';

type ThemeContextValue = {
	theme: ThemeMode;
	isDark: boolean;
	setTheme: (theme: ThemeMode) => void;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);


type ThemeProviderProps = {
	children: ReactNode;
	initialTheme?: ThemeMode;
};

const THEMES = {
    'movie_theater': {backgroundColor: '#0a0a0a', textColor: '#ff3b30'},
    'popcorn': {backgroundColor: '#ffcc00', textColor: '#000000'},
    'red_carpet': {backgroundColor: '#cc0000', textColor: '#ffffff'},
    'director_chair': {backgroundColor: '#333333', textColor: '#ffffff'},
}
export function ThemeProvider({ children, initialTheme = 'light' }: ThemeProviderProps) {

    const [theme, setTheme] = useState('movie_theater');

     let value = THEMES[theme]
	return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	return context;
}
