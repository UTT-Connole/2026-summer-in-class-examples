import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function RatStar() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🐀 Daily Ratffirmations 🐀</Text>

      <View style={styles.card}>
        <Text style={styles.affirmation}>You have the most magnificent whiskers anyone has ever seen.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.affirmation}>Your tail is perfectly long and wonderfully expressive.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.affirmation}>You are an excellent forager. The best, actually.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.affirmation}>Your tiny hands are incredibly skilled and everyone notices.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.affirmation}>You could cook a five-star meal if you had a taller friend.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.affirmation}>You are cleaner than people give you credit for. Much cleaner.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.affirmation}>Your intelligence is off the charts. Scientists agree.</Text>
      </View>

      <Text style={styles.footer}>Keep squeaking, superstar. 🌟</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#1a1a2e",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#e0b0ff",
    marginBottom: 24,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#2d2d44",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    width: "100%",
    borderLeftWidth: 4,
    borderLeftColor: "#b57bee",
  },
  affirmation: {
    fontSize: 18,
    color: "#f0e6ff",
    lineHeight: 26,
  },
  footer: {
    fontSize: 20,
    color: "#e0b0ff",
    marginTop: 16,
    fontStyle: "italic",
  },
});
