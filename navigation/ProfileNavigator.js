import React from "react";
import { View, Platform, Button, SafeAreaView } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import LoadingScreen from "../screens/LoadingScreen";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import firebase from "firebase";
// import TopTabNavigator from '../../navigation/TopTabNavigator'

const LoadingStackNavigator = createStackNavigator({
  Loading: {
    screen: LoadingScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const LoginStackNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const ProfileStackNavigator = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const ProfileDrawerNavigator = createDrawerNavigator(
  {
    Profile: ProfileStackNavigator,
  },
  {
    contentComponent: (props) => {
      return (
        <View style={{ flex: 1, paddingTop: 10, marginRight: 180 }}>
          <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
            <DrawerItems {...props} />
            <Button
              color={Platform.OS === "android" ? "tintColor" : "#fff"}
              title="Sign Out"
              onPress={() => firebase.auth().signOut()}
            />
          </SafeAreaView>
        </View>
      );
    },
    contentOptions: {
      activeTintColor: "#fff",
      labelStyle: {
        fontFamily: "open-sans",
        fontSize: 18,
        color: "#fff",
      },
    },
    drawerBackgroundColor: "black",
  }
);

const ProfileSwitchNavigator = createSwitchNavigator({
  Loading: LoadingStackNavigator,
  Login: LoginStackNavigator,
  Profile: ProfileDrawerNavigator,
});

export default createAppContainer(ProfileSwitchNavigator);
