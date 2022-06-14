import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React, {useState} from 'react'
import Card from '../components/Card'
import Search from '../components/Search'
import Header from '../components/Header'
import Catagories from '../components/Catagories'
export default function CatagoryList({catagories, term, setTerm}){
    return(
        <FlatList data={catagories} renderItem={({item, index}) => {return <Catagories title={item.title} active= {item.title === term} index={index} handlePress={() => setTerm(item.title)}/>}} keyExtractor={(key) => key.title} horizontal showsHorizontalScrollIndicator={false}/>
    );
}