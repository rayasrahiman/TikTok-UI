import React from "react";
import { View, StyleSheet } from "react-native";
import TopTabNavigator from "../../navigation/TopTabNavigator";

const ThirdLayer = (props) => {
  return (
    <View style={{ ...styles.third, ...props.style }}>
      <TopTabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  third: {
    flex: 2.5,
    backgroundColor: "black",
  },
});

export default ThirdLayer;
