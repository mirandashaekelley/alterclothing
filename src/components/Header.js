import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header({title}) {
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        display:'flex',
        alignItems: 'flex-start',
        padding: 20
    },
    headerText:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1B0B35'
    }
})