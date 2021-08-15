import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export type Props = {
  label: string;
  onPress: () => string;
};

export const Button: React.FC<Props> = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.buttonContainer}
    >
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {},
  buttonLabel: {},
});
