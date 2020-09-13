import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import FirstLayer from "../components/profile/FirstLayer";
import SecondLayer from "../components/profile/SecondLayer";
import ThirdLayer from "../components/profile/ThirdLayer";
import FourthLayer from "../components/profile/FourthLayer";
import firebase from "firebase";

console.disableYellowBox = true;

const ProfileScreen = (props) => {
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //     const userObj = props.route && props.route.params ? props.route.params.user : {};

  //     userObj && setUser(userObj);

  // }, [props.route])

  // const user = props.navigation.getParam('user')

  return (
    <View style={styles.container}>
      <FirstLayer navigation={props.navigation} />
      <SecondLayer />
      <ThirdLayer />
      <FourthLayer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProfileScreen;
