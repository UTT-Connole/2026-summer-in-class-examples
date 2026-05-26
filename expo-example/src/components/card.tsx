import {StyleSheet, View, Text} from "react-native"


export default function Card({ children }) {

  return (
      <View style={styles.card}>
        {children}
      </View>
  );
}   

const styles = StyleSheet.create({
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

})