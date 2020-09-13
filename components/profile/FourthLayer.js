import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import {Ionicons} from '@expo/vector-icons'


const FourthLayer = (props) => {
    return (
        <View style={{...styles.fourth, ...props.style}}>
        <Ionicons style={{...styles.bottomIcon, ...props.style}} name={Platform.OS === 'android' ? "md-square-outline" : "ios-square-outline"} size={32} color= "grey" />
        <Ionicons style={{...styles.bottomIcon, ...props.style}} name={Platform.OS === 'android' ? "md-planet" : "ios-planet"} size={32} color="grey" />
        <View 
        style={{...styles.bottomAddIcon, ...props.style}}>
        <Ionicons  name={Platform.OS === 'android' ? "md-add" : "ios-add"} size={32} color="black" />
        </View>
        <Ionicons style={{...styles.bottomIcon, ...props.style}} name={Platform.OS === 'android' ? "md-chatbubbles" : "ios-chatbubbles"} size={32} color="grey" />
        <Ionicons style={{...styles.bottomIcon, ...props.style}} name={Platform.OS === 'android' ? "md-person" : "ios-person"} size={32} color="white" />
        </View>
    );
};

const styles = StyleSheet.create({
    fourth:{
        flex:0.3,
        flexDirection: 'row',
        backgroundColor: 'black'
    },
    bottomIcon:{
        marginHorizontal: 24
    },
    bottomAddIcon:{
    marginHorizontal: 24, backgroundColor: 'white', paddingHorizontal: 15, 
    borderRadius: 10 
    }
});

export default FourthLayer;
