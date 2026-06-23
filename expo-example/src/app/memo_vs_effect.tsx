import { Pressable, StyleSheet, Text, View } from "react-native";
import { useEffect, useMemo, useState } from "react";

// Heavy synchronous calculation
const findFibonacci = (n: number): number => {
  console.log(`Calculating Fibonacci for n=${n}`);
  if (n <= 2) return 1;
  return findFibonacci(n - 1) + findFibonacci(n - 2);
};

export default function App() {
  const [num, setNum] = useState(4);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  //   const fibResult = useMemo(() => {
  //     console.log("Calculating Fibonacci..."); // Only logs when 'num' changes
  //     return findFibonacci(num);
  //   }, [num]);

  const fibResult = findFibonacci(num);

  useEffect(() => {
    console.log(`The theme changed to: ${isDarkTheme ? "Dark" : "Light"}`);
  }, [isDarkTheme]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#333" : "#FFF" },
      ]}
    >
      <Text style={[styles.title, { color: isDarkTheme ? "#FFF" : "#000" }]}>
        Fibonacci Calculator
      </Text>

      <Text style={[styles.subtitle, { color: isDarkTheme ? "#FFF" : "#000" }]}>
        Fib of {num} is {fibResult}
      </Text>

      <Pressable style={styles.button} onPress={() => setNum(num + 1)}
      accessibilityRole="button"
      accessibilityLabel="Increment Fibonacci number"
      accessibilityHint="Increments the number for which Fibonacci is calculated"
        
        >
        <Text style={styles.buttonText}>Increment Num</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => setIsDarkTheme(!isDarkTheme)}
      >
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 14,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#0f609b",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
