import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Catagories = ({title, active, handlePress}) =>{
    return(
        <TouchableOpacity onPress={handlePress}>
        <View>
            <Text style={[
                styles.catagoryTitle,
                active ? {textDecorationLine: 'underline'} : {textDecorationLine: 'none'},
            ]}
                >{title}</Text>
        </View>
        </TouchableOpacity>
    );
}

export default Catagories

const styles = StyleSheet.create({
    catagoryTitle:{
        marginRight: 55,
        fontSize: 17,
        // textDecorationLine: 'underline',
        textDecorationColor: 'hsla(275, 15%, 47%, 1)',
    },
})