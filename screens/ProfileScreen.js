import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-community/async-storage'
import FirstLayer from "../components/profile/FirstLayer";
import SecondLayer from "../components/profile/SecondLayer";
import ThirdLayer from "../components/profile/ThirdLayer";
import FourthLayer from "../components/profile/FourthLayer";
import firebase from "firebase";

console.disableYellowBox = true;

const ProfileScreen = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
      async function loadUserData() {
        const userObj = await AsyncStorage.getItem('user');
        console.log('userObj', JSON.parse(userObj));

        userObj && setUser(JSON.parse(userObj));
      }

      loadUserData();
  }, [setUser])

  console.log('what in our state', user)

  return (
    <View style={styles.container}>
      <FirstLayer navigation={props.navigation} />
      <SecondLayer user={user} />
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
