import React from 'react'
import {View, StyleSheet} from 'react-native'
import FirstLayer from '../components/profile/FirstLayer'
import SecondLayer from '../components/profile/SecondLayer'
import ThirdLayer from '../components/profile/ThirdLayer'
import FourthLayer from '../components/profile/FourthLayer'



const ProfileScreen = props => {
return (
<View style={styles.container}>
        <FirstLayer navigation = {props.navigation} />
         <SecondLayer />
        <ThirdLayer />
        <FourthLayer />          
</View>
        )
    }

const styles = StyleSheet.create({
    container:{
    flex: 1
    },
})

export default ProfileScreen