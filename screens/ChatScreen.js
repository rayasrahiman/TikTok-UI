import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>No Chat yet</Text>
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

export default ChatScreen;
