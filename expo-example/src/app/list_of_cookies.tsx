import { FlatList, StyleSheet, Text, View } from 'react-native';

const COOKIES = [
	'Chocolate Chip',
	'Oatmeal Raisin',
	'Sugar Cookie',
	'Snickerdoodle',
	'Peanut Butter',
	'White Chocolate Macadamia',
	'Gingerbread',
	'Shortbread',
	'Double Chocolate',
	'Molasses',
];

for (let index = 0; index < 10000; index++) {
	COOKIES.push(`Cookie ${index + 1}`);
    console.log(`Added Cookie ${index + 1}`);
}

export default function ListOfCookiesPage() {
	return (
		<FlatList
			style={styles.container}
			data={COOKIES}
			keyExtractor={(item, index) => `${item}-${index}`}
			ListHeaderComponent={<Text style={styles.title}>List of Cookies</Text>}
			contentContainerStyle={styles.listContent}
			renderItem={({ item, index }) => (
				<View style={styles.item}>
					<Text style={styles.itemNumber}>{index + 1}.</Text>
					<Text style={styles.itemText}>{item}</Text>
				</View>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 28,
		fontWeight: '700',
		marginTop: 12,
		marginBottom: 16,
	},
	listContent: {
		paddingBottom: 24,
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#d0d0d0',
	},
	itemNumber: {
		width: 28,
		fontSize: 16,
		color: '#666',
	},
	itemText: {
		fontSize: 18,
		color: '#111',
	},
});
