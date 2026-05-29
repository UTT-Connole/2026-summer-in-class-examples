import { FontAwesome5 } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";

type IngredientInputProps = {
  label: string;
  placeholder: string;
  value: string;
  field: string;
  keyboardType: 'decimal-pad' | 'number-pad';
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