import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import * as Google from "expo-google-app-auth";
import firebase from "firebase";

class LoginScreen extends Component {
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  onSignIn = (googleUser) => {
    console.log("Google Auth Response", googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function (firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInWithCredential(credential)
            .then(function (result) {
              console.log("user signed in");
              if (result.additionalUserInfo.isNewUser) {
                firebase
                  .database()
                  .ref("/users/" + result.user.uid)
                  .set({
                    gmail: result.user.email,
                    profile_picture: result.additionalUserInfo.profile.picture,
                    locale: result.additionalUserInfo.profile.locale,
                    first_name: result.additionalUserInfo.profile.given_name,
                    last_name: result.additionalUserInfo.profile.family_name,
                    created_at: Date.now(),
                  })
                  .then(function (snapshot) {});
              } else {
                firebase
                  .database()
                  .ref("/users/" + result.user.uid)
                  .update({
                    last_logged_in: Date.now(),
                  });
              }
            })
            .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          console.log("User already signed-in Firebase.");
        }
      }.bind(this)
    );
  };
  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "740143041093-ehsohljjfkr496kf6j2ddgk91v0vai9c.apps.googleusercontent.com",
        iosClientId:
          "740143041093-t3f469kkfqmbuhuglvf16ggafen7lkj6.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        await AsyncStorage.setItem("user", JSON.stringify(result.user));
        // this.props.navigation.navigate("Profile");
        this.onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerText}>
          <Text
            style={{
              marginHorizontal: 15,
              fontSize: 18,
              fontFamily: "open-sans",
              color: "#ccc",
            }}
          >
            Following
          </Text>
          <Text
            style={{
              marginHorizontal: 15,
              fontSize: 18,
              fontFamily: "open-sans",
              color: "#f8f8f8",
            }}
          >
            For You
          </Text>
        </View>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={require("../assets/background.jpg")}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.footer}>
          <View style={{ marginHorizontal: 60, padding: 10 }}>
            <Text style={{ fontFamily: "open-sans", fontSize: 18 }}>
              You need a TikTok account to continue
            </Text>
          </View>
          <Button title="Sign Up With Phone Number" color="pink" />
          <View style={styles.iconConatiner}>
            <Image
              style={styles.socialIcons}
              source={require("../assets/facebook.png")}
            />
            <TouchableOpacity onPress={this.signInWithGoogleAsync}>
              <Image
                style={styles.socialIcons}
                source={require("../assets/google-sign-in.png")}
              />
            </TouchableOpacity>
            <Image
              style={styles.socialIcons}
              source={require("../assets/instagram.png")}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  header: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#ccc'
  },
  image: {
    height: "150%",
    width: "100%",
  },
  footer: {
    flex: 2.8,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  socialIcons: {
    width: 50,
    height: 50,
    borderRadius: 150 / 2,
    marginHorizontal: 5,
  },
  headerText: {
    flexDirection: "row",
    zIndex: 1000,
    justifyContent: "center",
    marginTop: -100,
    textAlign: "center",
  },
  iconConatiner: {
    marginTop: 80,
    flexDirection: "row",
  },
});

export default LoginScreen;
