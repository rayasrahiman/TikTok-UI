import React from 'react'
import {View, Platform, Button, SafeAreaView} from 'react-native'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer'
import LoadingScreen from '../screens/LoadingScreen'
import LoginScreen from '../screens/LoginScreen'
import ProfileScreen from '../screens/ProfileScreen'
import firebase from 'firebase'


const ProfileSwitchNavigator = createSwitchNavigator({
    Loading: LoadingScreen,
    Login: LoginScreen,
    Profile: ProfileScreen
})

const MainNavigator = createDrawerNavigator({
    Profile: ProfileSwitchNavigator
},{
    contentComponent: props => {
        return <View style={{flex: 1, paddingTop: 10, marginRight: 180}}>
            <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
                <DrawerItems {...props} />
                <Button color="#fff" title = "Sign Out" 
                onPress={() => firebase.auth().signOut()} />
            </SafeAreaView>
        </View>
    },
    contentOptions:{
        labelStyle: {
            fontFamily: 'open-sans',
            fontSize: 18,
            color: '#fff',
          },
    },
    drawerBackgroundColor: 'black',
})

export default createAppContainer(MainNavigator)