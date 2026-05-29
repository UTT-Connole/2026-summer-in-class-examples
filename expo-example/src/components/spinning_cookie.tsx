import React, { useEffect, useRef } from "react";
import { Animated, Easing, Text, StyleSheet, Pressable } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useState } from "react";

export default function SpinningCookie({cookieColor = "saddlebrown"  }) {

  const [size, setSize] = useState(24);
  const [icon, setIcon] = useState("cookie");

  useEffect(() => {
    console.log("SpinningCookie Component Mounted");
  }, [])

  const updateSize = () => {
    setSize(size + 4);
    if (size > 50) {
      setIcon("cookie-bite");
    }
  };


  useEffect(() => {
    console.log("based on cookieColor prop change: ", cookieColor);
    return () => {
      console.log("cleanup for cookieColor change: ", cookieColor);
    }
  }, [cookieColor])


  return (
    <Pressable onPress={updateSize} style={{ padding: 20 }} >

    <Animated.View style={styles.container}  >
      <FontAwesome5 name={icon} size={size} color={cookieColor} />
    </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 48,
  },
});
