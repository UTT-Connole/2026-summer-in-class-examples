import { Pressable, StyleSheet, Text, View } from "react-native";

import { useColor } from "../hooks/colors_context";
import { useState } from "react";

export default function RainbowPage() {
  const { color, setColor } = useColor();

  return (
    <View style={styles.container}>
      <View style={{ ...styles.swatch, backgroundColor: color }} />
      <Text style={styles.name}>Blue</Text>

      <Pressable onPress={() => setColor("blue")}>
        <Text style={{ ...styles.hex, backgroundColor: "blue" }}>blue</Text>
      </Pressable>

      <Pressable onPress={() => setColor("yellow")}>
        <Text style={{ ...styles.hex, backgroundColor: "yellow" }}>yellow</Text>
      </Pressable>

      <Pressable onPress={() => setColor("red")}>
        <Text style={{ ...styles.hex, backgroundColor: "red" }}>red</Text>
      </Pressable>

      <Text style={styles.description}>
        Blue is a primary color associated with the sky and ocean. It evokes
        feelings of calm, trust, and depth. In color theory it sits between
        violet and cyan on the visible spectrum, with a wavelength of roughly
        450–495 nm. Blue is widely used to convey reliability and
        professionalism.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d1b2a",
    alignItems: "center",
    padding: 24,
    gap: 16,
  },
  swatch: {
    width: "100%",
    height: 160,
    backgroundColor: "#ADD8E6",
    borderRadius: 16,
    marginTop: 8,
  },
  name: {
    fontSize: 32,
    fontWeight: "700",
    color: "#5b9fff",
  },
  hex: {
    fontSize: 16,
    color: "#aaaaaa",
    fontFamily: "monospace",
  },
  description: {
    fontSize: 16,
    color: "#ccddff",
    lineHeight: 26,
    textAlign: "center",
  },
});
