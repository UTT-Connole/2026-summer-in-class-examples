import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../example/src/hooks/use-theme';

type Props = {
	title: string;
	reason: string;
};

export default function MovieCard({ title, reason }: Props & { theme_styles: any }) {
    const theme_styles = useTheme();
    console.log(theme_styles)
	return (
		<View style={[styles.card, theme_styles]}>
			<Text style={[styles.title, theme_styles]}>{title}</Text>
			<Text style={[styles.reason, theme_styles]}>{reason}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#1a0000',
		borderRadius: 12,
		padding: 14,
		borderWidth: 1,
		borderColor: '#cc0000',
	},
	title: {
		fontSize: 18,
		fontWeight: '600',
		color: '#ff3b30',
		marginBottom: 6,
	},
	reason: {
		fontSize: 15,
		lineHeight: 21,
		color: '#e8c8c8',
	},
});
