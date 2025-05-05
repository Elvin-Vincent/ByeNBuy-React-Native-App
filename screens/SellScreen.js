import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SellScreen = () => (
  <View style={styles.container}>
    <Text>Sell your item here</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SellScreen;
