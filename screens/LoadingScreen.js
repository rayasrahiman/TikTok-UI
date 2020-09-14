import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import * as firebase from "firebase";

const LoginScreen = (props) => {
  useEffect(() => {
    checkIfLoggedIn();
  });
  const checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        props.navigation.navigate("Profile");
      } else {
        props.navigation.navigate("Login");
      }
    });
  };
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

export default LoginScreen;
