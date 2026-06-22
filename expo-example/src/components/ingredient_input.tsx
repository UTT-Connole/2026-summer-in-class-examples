import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

type IngredientInputProps = {
  label: string;
  placeholder: string;
  value: string;
  field: string;
  keyboardType: "decimal-pad" | "number-pad";
  onChange: (field: string, value: string) => void;
};

export default function IngredientInput({
  label,
  placeholder,
  value,
  field,
  keyboardType,
  onChange,
}: IngredientInputProps) {
  return (
    <View style={styles.formGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={(newValue) => onChange(field, newValue)}
        keyboardType={keyboardType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
    fontSize: 16,
  },
});
