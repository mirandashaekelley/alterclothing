import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Card = ({title, uri, price}) => {
  return (
    <View style={styles.card}>
        <Image style={styles.cardImage} source={uri}></Image>
        <Text style={styles.cardHeader}>{title}</Text>
        <Text style={styles.cardPrice}>{price}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card:{
        width: 190,
        marginRight: 5,
        height: 270,

        marginTop: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        backgroundColor: 'white',
        // borderRadius: '15'
    },
    
    cardImage:{
        marginTop: 5,
        width: 200,
        height: 200,
        // resizeMode: "contain",
        alignSelf: 'flex-start'
    }
})