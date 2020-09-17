import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BottomTabBar = (props) => {
  let Touchable = TouchableOpacity;
  if (Platform.OS === "android") {
    Touchable = TouchableWithoutFeedback;
  }
  return (
    <View style={{ ...styles.fourth, ...props.style }}>
      <Touchable onPress={props.wall}>
        <Ionicons
          style={{ ...styles.bottomIcon, ...props.style }}
          name={
            Platform.OS === "android"
              ? "md-square-outline"
              : "ios-square-outline"
          }
          size={32}
          color="grey"
        />
      </Touchable>
      <Touchable onPress={props.explore}>
        <Ionicons
          style={{ ...styles.bottomIcon, ...props.style }}
          name={Platform.OS === "android" ? "md-planet" : "ios-planet"}
          size={32}
          color="grey"
        />
      </Touchable>
      <Touchable>
        <View style={{ ...styles.bottomAddIcon, ...props.style }}>
          <Ionicons
            name={Platform.OS === "android" ? "md-add" : "ios-add"}
            size={32}
            color="black"
          />
        </View>
      </Touchable>
      <Touchable onPress={props.chat}>
        <Ionicons
          style={{ ...styles.bottomIcon, ...props.style }}
          name={
            Platform.OS === "android" ? "md-chatbubbles" : "ios-chatbubbles"
          }
          size={32}
          color="grey"
        />
      </Touchable>
      <Touchable onPress={props.profile}>
        <Ionicons
          style={{ ...styles.bottomIcon, ...props.style }}
          name={Platform.OS === "android" ? "md-person" : "ios-person"}
          size={32}
          color="white"
        />
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  fourth: {
    flex: 0.3,
    flexDirection: "row",
    backgroundColor: "black",
  },
  bottomIcon: {
    marginHorizontal: Dimensions.get("window").width > 360 ? 23 : 21,
  },
  bottomAddIcon: {
    marginHorizontal: Dimensions.get("window").width > 360 ? 23 : 21,
    backgroundColor: "white",
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});

export default BottomTabBar;
