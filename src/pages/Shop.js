import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React, {useState} from 'react'
import Card from '../components/Card'
import Search from '../components/Search'
import Header from '../components/Header'
import Catagories from '../components/Catagories'
import CatagoryList from '../components/CatagoryList'

const Shop = () => {
    // let term = "women"
    const [term, setTerm] = useState("women")
    const clothingCatagories = [
        {
            title: 'women'
        },
        {
            title: 'men'
        },
        {
            title: 'shoes'
        },
        {
            title: 'accessories'
        },
    ]
 

    const womensClothing = [
        {
            title: "Digital Trip Dress",
            uri: "https://firebasestorage.googleapis.com/v0/b/alterclothing-e0607.appspot.com/o/digitaltripdress.jpg?alt=media&token=05e5e495-e852-4e1d-a4db-29f4c9390d53",
            price: "44.00"
        },
        {
            title: "Digital Trip Shirt",
            uri: "https://firebasestorage.googleapis.com/v0/b/alterclothing-e0607.appspot.com/o/digitaltripdress.jpg?alt=media&token=05e5e495-e852-4e1d-a4db-29f4c9390d53",
            price: "44.00"
        },
        {
            title: "Digital Trip Skirt",
            uri: "https://firebasestorage.googleapis.com/v0/b/alterclothing-e0607.appspot.com/o/digitaltripdress.jpg?alt=media&token=05e5e495-e852-4e1d-a4db-29f4c9390d53",
            price: "44.00"
        },
        {
            title: "Digital Trip Pants",
            uri: "https://firebasestorage.googleapis.com/v0/b/alterclothing-e0607.appspot.com/o/digitaltripdress.jpg?alt=media&token=05e5e495-e852-4e1d-a4db-29f4c9390d53",
            price: "44.00"
        },
    ]
  return (
    <SafeAreaView style={styles.container}>
        <Header title='Shop'/>
        <Search setTerm={setTerm}/>
        <View style={styles.catagories}>
        <CatagoryList catagories={clothingCatagories} setTerm={setTerm} term={term}/>
        </View>
        <View style={styles.clothing}>
            <FlatList style={styles.clothingContainer} keyExtractor={(clothing) => clothing.title} data={womensClothing} renderItem={({item}) => {return <Card title={item.title} uri={{uri:item.uri}} price={item.price}/>}}/>
            <View style={styles.bottomSpacing}></View>
        </View>
    </SafeAreaView>
  )
}

export default Shop

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
    },
    catagories:{
        paddingTop: 10,
        paddingLeft: 25,
        paddingRight: 20,
        paddingBottom: 20,
        flexDirection: 'row'
    },
    horizontalScroll:{
        
    },
    
    clothing:{
        paddingLeft: 15,
        display: 'flex',
        flexDirection: 'row',

    },
    clothingContainer: {

    },
    bottomSpacing:{
        height: 100,
        width:100
    }
})