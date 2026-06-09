import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import MovieCard from '../components/movie_card';
import { useState } from 'react';
import { ThemeProvider } from '../hooks/theme_context';

const movies = [
	{
		title: 'The Big Lebowski',
		reason:
			'It blends absurd humor with unforgettable characters and endlessly quotable lines.',
	},
	{
		title: 'Eternal Sunshine of the Spotless Mind',
		reason:
			'It tells a deeply emotional love story in a creative, mind-bending way.',
	},
	{
		title: 'The Grand Budapest Hotel',
		reason:
			'Its visual style, fast-paced storytelling, and charm make every scene delightful.',
	},
	{
		title: 'The Royal Tenenbaums',
		reason:
			'It balances quirky comedy and heartfelt family drama with a unique voice.',
	},
	{
		title: 'About Time',
		reason:
			'It uses time travel to highlight love, family, and appreciating everyday life.',
	},
	{
		title: 'What About Bob?',
		reason:
			'It is a classic comedy powered by perfect timing and hilarious performances.',
	},
	{
		title: 'Phineas and Ferb: Star Wars',
		reason:
			'It is a fun crossover that mixes Star Wars adventure with clever animated humor.',
	},
	{
		title: 'Princess Mononoke',
		reason:
			'It delivers epic fantasy, complex themes, and stunning animation.',
	},
	{
		title: 'Spirited Away',
		reason:
			'It is imaginative, emotional, and filled with beautifully crafted world-building.',
	},
	{
		title: "Howl's Moving Castle",
		reason:
			'It combines magical adventure, romance, and anti-war themes in a gorgeous story.',
	},
	{
		title: 'Castle in the Sky',
		reason:
			'It offers thrilling adventure, memorable characters, and timeless wonder.',
	},
];

const THEMES = {
    'movie_theater': {backgroundColor: '#0a0a0a', textColor: '#ff3b30'},
    'popcorn': {backgroundColor: '#ffcc00', textColor: '#000000'},
    'red_carpet': {backgroundColor: '#cc0000', textColor: '#ffffff'},
    'director_chair': {backgroundColor: '#333333', textColor: '#ffffff'},
}
export default function MoviesScreen() {

    const [theme, setTheme] = useState('movie_theater');
    let theme_styles = THEMES[theme]

	return (
        <ThemeProvider>
		<ScrollView style={[styles.container, theme_styles]} contentContainerStyle={styles.content}>
			<Text style={[styles.heading, theme_styles]}>Favorite Movies</Text>
			<Text style={[styles.subheading, theme_styles]}>Why they are so great</Text>

            <Pressable onPress={() => setTheme('popcorn')}>
                <Text style={{color: theme_styles.textColor}}>Popcorn Theme</Text>
            </Pressable>
            <Pressable onPress={() => setTheme('red_carpet')}>
                <Text style={{color: theme_styles.textColor}}>Red Carpet Theme</Text>
            </Pressable>
            <Pressable onPress={() => setTheme('director_chair')}>
                <Text style={{color: theme_styles.textColor}}>Director's Chair Theme</Text>
            </Pressable>

			{movies.map((movie) => (
				<MovieCard key={movie.title} title={movie.title} reason={movie.reason} />
			))}
		</ScrollView>
        </ThemeProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0a0a0a',
	},
	content: {
		padding: 16,
		paddingBottom: 28,
		gap: 12,
	},
	heading: {
		fontSize: 28,
		fontWeight: '700',
		color: '#ff3b30',
	},
	subheading: {
		fontSize: 16,
		color: '#ff8a80',
		marginBottom: 8,
	},
});

