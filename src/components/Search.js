import {Text, TextInput, View, StyleSheet} from 'react-native'
import React, {useState} from 'react'



export default function Search({setTerm}){
    const [input, setInput] = useState("");

    const handleEndEditing = () => {
        if(!input) return;
        setTerm(input);
        setInput("")
    }
    return(
        <View style={styles.searchcontainer}>
            <TextInput style={styles.searchbar} placeholder='Search...' onChangeText={(text) => {setInput(text);}} value={input} onEndEditing={handleEndEditing}/>
        </View>
    );
}

const styles = StyleSheet.create({
    searchcontainer: {
    },
    searchbar:{
        backgroundColor: '#ffffff',
        color: '#1B0B35',
        marginLeft: 20,
        width: 300,
        height: 30,
        padding: 5,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        
    }
})