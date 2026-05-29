import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import SpinningCookie from "../components/spinning_cookie";
import { Button } from "@react-navigation/elements";

const facts = [
	"Chocolate chips were popularized in the 1930s with the original Toll House cookie.",
	"Most chocolate chips are designed to hold their shape while baking.",
	"Semi-sweet is the classic cookie choice, but dark and milk chips are popular too.",
	"Mini chocolate chips spread more evenly through batter and dough.",
	"You can mix chips with sea salt, nuts, or dried fruit for extra texture.",
	"Chocolate chips also work great in pancakes, muffins, and homemade trail mix.",
];

export default function ChocolateChipPage() {

    useEffect(() => {
        console.log("Chocolate Chip Page Mounted");
    }, [])

    const [cookieColor, setCookieColor] = useState("chartreuse");

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>🍪 Chocolate Chip Central</Text>
			<Text style={styles.subtitle}>Cool chocolate chip stuff and facts</Text>
            <Button title="Change Cookie Color"
            onPress={() => setCookieColor(cookieColor === "chartreuse" ? "purple" : "chartreuse")}
            />  
            <SpinningCookie cookieColor={cookieColor}/>

            {
            cookieColor === "chartreuse"
            ? <SpinningCookie cookieColor={cookieColor}/>
            : <Text>Not rendered</Text>
            }

			<View style={styles.card}>
				<Text style={styles.cardTitle}>Why chocolate chips are awesome</Text>
				<Text style={styles.paragraph}>
					Chocolate chips are tiny flavor bombs that make desserts instantly better.
					They melt just enough to get gooey, but often keep their shape for that
					classic cookie look.
				</Text>
			</View>

			<View style={styles.card}>
				<Text style={styles.cardTitle}>Fun Facts</Text>
				{facts.map((fact, index) => (
					<Text key={index} style={styles.factItem}>
						{index + 1}. {fact}
					</Text>
				))}
			</View>

			<View style={styles.card}>
				<Text style={styles.cardTitle}>Pro Chip Tips</Text>
				<Text style={styles.paragraph}>
					Try chilling your dough before baking to get thicker cookies with rich
					chocolate pockets. Sprinkle a tiny pinch of flaky salt on top after
					baking for a bakery-style finish.
				</Text>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: "#fff8ef",
		gap: 14,
	},
	title: {
		fontSize: 30,
		fontWeight: "800",
		color: "#4a2d20",
	},
	subtitle: {
		fontSize: 16,
		color: "#7a5644",
		marginBottom: 6,
	},
	card: {
		backgroundColor: "#ffffff",
		borderRadius: 14,
		padding: 14,
		borderWidth: 1,
		borderColor: "#efdac7",
	},
	cardTitle: {
		fontSize: 18,
		fontWeight: "700",
		color: "#5c3b2b",
		marginBottom: 8,
	},
	paragraph: {
		fontSize: 15,
		lineHeight: 22,
		color: "#3f2b20",
	},
	factItem: {
		fontSize: 15,
		lineHeight: 22,
		color: "#3f2b20",
		marginBottom: 6,
	},
});
