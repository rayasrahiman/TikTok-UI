import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import HeaderButton from '../HeaderButton'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

const FirstLayer = (props) => {
    return (
        <View style={{...styles.first, ...props.style}}>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item style={{...styles.headerButton, ...props.style}}  iconName={Platform.OS === 'android' ? "md-menu" : "ios-menu"} onPress = {()=> props.navigation.toggleDrawer()} />
            </HeaderButtons>
        </View>
    );
};

const styles = StyleSheet.create({
    first:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        // position: 'absolute',
        // top: 0,
        // left:0,
        // right:0,
        backgroundColor:'steelblue',
        // height: HEADER_MAX_HEIGHT
        },
        headerButton:{
        marginTop: 30, 
        paddingVertical: 13, 
        padding:5, 
        backgroundColor:'#23395d', 
        borderRadius: 75,
        },
});

export default FirstLayer;
