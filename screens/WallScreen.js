import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WallScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>No Wall yet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default WallScreen;
