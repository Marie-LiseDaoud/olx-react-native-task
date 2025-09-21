import React from "react";
import { ScrollView as RNScrollView } from "react-native";
import styles from "./styles";

export default function ScrollView({ children }) {
  return (
    <RNScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      {children}
    </RNScrollView>
  );
}
