import React from 'react';
import {View, Text, StyleSheet} from 'react-native'; 

export default function AlertHeader(props){
    const success='#b8f4b9'
    const fail = '#f6735c'
    return(
        <View style = {[styles.container,{backgroundColor:props?.fail===true?fail:success}]}>
            {props?.element}
            <Text style = {styles.alert}>{props.alert}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:50,
        justifyContent:'center'
    },
    alert:{
        textAlign:'center',
        color:'#636060',
        fontSize:16
    }
})