import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header title="Alter"/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
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