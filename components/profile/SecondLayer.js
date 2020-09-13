import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

HEADER_MAX_HEIGHT = 120;
HEADER_MIN_HEIGHT = 70;
PROFILE_IMAGE_MAX_HEIGHT = 80;
PROFILE_IMAGE_MIN_HEIGHT = 40;
const SecondLayer = (props) => {
  console.log("user obj in props", props.user);
  const DEFAULT_AVATAR =  require("../../assets/default-user.png");
  const fetchedAvatar = props.user.photoUrl && { uri: props.user.photoUrl };
  return (
    <View style={{ ...styles.second, ...props.style }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ ...styles.imageContainer, ...props.style }}>
          <Image
            style={{ ...styles.image, ...props.style }}
            source={fetchedAvatar || DEFAULT_AVATAR}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginLeft: Dimensions.get("window").width * 0.33,
            padding: 5,
          }}
        >
          <Ionicons
            style={{ ...styles.icon, ...props.style }}
            name={
              Platform.OS === "android" ? "md-star-outline" : "ios-star-outline"
            }
            color="white"
            size={24}
          />
          <Ionicons
            style={{ ...styles.icon, ...props.style }}
            name={
              Platform.OS === "android" ? "md-person-add" : "ios-person-add"
            }
            color="white"
            size={24}
          />
          <Ionicons
            style={{ ...styles.icon, ...props.style }}
            name={Platform.OS === "android" ? "md-grid" : "ios-grid"}
            color="white"
            size={24}
          />
        </View>
      </View>
      <Text style={{ ...styles.name, ...props.style }}>
        {/* {props.name} */}
        {/* UserName */}
        {props.user && props.user.name ? props.user.name : "default name"}
      </Text>
      <Text style={{ ...styles.id, ...props.style }}>
        ID: {props.user && props.user.id ? props.user.id : "default id"}
      </Text>
      <Text style={{ ...styles.bio, ...props.style }}>No bio yet</Text>
      <View style={{ ...styles.textContainer, ...props.style }}>
        <Text style={{ ...styles.text, ...props.style }}>0 Hearts</Text>

        <Text style={{ ...styles.text, ...props.style }}>0 Following</Text>

        <Text style={{ ...styles.text, ...props.style }}>0 Followers</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  second: {
    flex: 1.5,
    backgroundColor: "dimgrey",
  },
  imageContainer: {
    height: PROFILE_IMAGE_MAX_HEIGHT,
    width: PROFILE_IMAGE_MAX_HEIGHT,
    borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
    borderColor: "dimgrey",
    borderWidth: 3,
    overflow: "hidden",
    // marginTop: HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT / 2),
    marginLeft: 10,
    marginTop: -20,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  icon: {
    backgroundColor: "grey",
    marginHorizontal: 5,
    padding: 10,
  },
  name: {
    fontFamily: "open-sans-bold",
    fontSize: 26,
    marginLeft: 15,
    color: "white",
  },
  id: {
    fontFamily: "open-sans",
    fontSize: 16,
    marginLeft: 15,
    color: "white",
  },
  bio: {
    fontFamily: "open-sans",
    fontSize: 16,
    marginLeft: 15,
    color: "darkgrey",
  },
  textContainer: {
    flexDirection: "row",
    padding: 10,
  },
  text: {
    color: "white",
    marginHorizontal: 5,
    fontFamily: "open-sans",
  },
});

export default SecondLayer;
