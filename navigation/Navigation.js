// import React from 'react'
// import { Platform } from 'react-native'
// import {createStackNavigator} from 'react-navigation-stack'
// import {createAppContainer} from 'react-navigation'
// import {createBottomTabNavigator} from 'react-navigation-tabs'
// import {Ionicons} from '@expo/vector-icons'
// import ProfileScreen from '../screens/ProfileScreen'
// import ChatScreen from '../screens/ChatScreen'
// import WallScreen from '../screens/WallScreen'
// import ExploreScreen from '../screens/ExploreScreen'


// const ProfileNavigator = createStackNavigator({
//     Profile: {
//         screen: ProfileScreen, 
//         navigationOptions:{
//             headerShown: false,
//         },
//     },
// })

// const BottomTabNavigator = createBottomTabNavigator({
//     Wall: {
//         screen: WallScreen, 
//         navigationOptions:{
//             tabBarLabel: " ",
//             tabBarIcon: (tabInfo) => {
//             return <Ionicons name={Platform.OS === 'android' ? "md-square-outline" : "ios-square-outline"} size={24} color={tabInfo.tintColor} />
//             }
//         }
//         },
//     Explore: {
//         screen: ExploreScreen, 
//         navigationOptions:{
//             tabBarLabel: " ",
//             tabBarIcon: (tabInfo) => {
//             return <Ionicons name={Platform.OS === 'android' ? "md-planet" : "ios-planet"} size={24} color={tabInfo.tintColor} />
//             }
//         }
//         },
//     Chat: {
//         screen: ChatScreen, 
//         navigationOptions:{
//             tabBarLabel: " ",
//             tabBarIcon: (tabInfo) => {
//             return <Ionicons name={Platform.OS === 'android' ? "md-chatbubbles" : "ios-chatbubbles"} size={24} color={tabInfo.tintColor} />
//             }
//         }
//         },
//     Profile: {
//     screen: ProfileNavigator, 
//     navigationOptions:{
//         tabBarLabel: " ",
//         tabBarIcon: (tabInfo) => {
//         return <Ionicons name={Platform.OS === 'android' ? "md-person" : "ios-person"} size={24} color={tabInfo.tintColor} />
//         }
//     }
//     },
// },{ 
//     tabBarOptions: {
//         style: {          backgroundColor: 'black',
//         },
//         tabStyle:{
//             marginTop: 10
//         },
//         activeTintColor: '#fff',
//         inactiveTintColor: 'grey'
//     }
// })


// export default createAppContainer(BottomTabNavigator)