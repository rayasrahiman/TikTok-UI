import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import TopMenuBar from "../components/profile/TopMenuBar";
import UserProfileDetails from "../components/profile/UserProfileDetails";
import UserVideosLikes from "../components/profile/UserVideosLikes";
import BottomTabBar from "../components/profile/BottomTabBar";

console.disableYellowBox = true;

const ProfileScreen = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadUserData() {
      try {
        const userObj = await AsyncStorage.getItem("user");
        console.log("userObj", JSON.parse(userObj));

        userObj && setUser(JSON.parse(userObj));
      } catch (err) {
        console.log("err", err);
        // console.warn(err);
      }
    }

    loadUserData();
  }, [setUser]);

  // console.log("what in our state", user);

  return (
    <View style={styles.container}>
      <TopMenuBar navigation={props.navigation} />
      <UserProfileDetails user={user} />
      <UserVideosLikes />
      <BottomTabBar
        wall={() => props.navigation.navigate("Wall")}
        explore={() => props.navigation.navigate("Explore")}
        chat={() => props.navigation.navigate("Chat")}
        profile={() => props.navigation.navigate("Profile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProfileScreen;
