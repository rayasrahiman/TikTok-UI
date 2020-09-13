import React from 'react'
import {Platform} from 'react-native'
import {createAppContainer} from 'react-navigation'
import { createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {Ionicons} from '@expo/vector-icons'
import VideosScreen from '../screens/VideosScreen'
import LikesScreen from '../screens/LikesScreen'

const TopTabNavigator = createMaterialTopTabNavigator({
    Videos: {
    screen: VideosScreen, 
    navigationOptions: {
        tabBarLabel: "Videos 0"
    },
},
Likes: {
    screen: LikesScreen, 
    navigationOptions: {
        tabBarLabel: "Likes 0",
        tabBarIcon: (tabInfo) => {
           return <Ionicons name = {Platform.OS === 'android' ? 'md-person' : "ios-person"} size = {21} style={{marginLeft:8}} color={tabInfo.tintColor}  />
        },
    },
},
}, {
    tabBarOptions:{
        style: {
            backgroundColor: 'black',
            height: 70,
            padding: 10,
        },
        tabStyle:{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
        },
        labelStyle:{
            fontSize: 16,
            fontFamily: 'open-sans'
        },
        showIcon: true,
        activeTintColor:'#fff',
        inactiveTintColor: 'grey'
    }
})

export default createAppContainer(TopTabNavigator)