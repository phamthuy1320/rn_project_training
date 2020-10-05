import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
    },
    box:{
        height:40,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#000',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center'
    },
    title:{
        color:'#b2b1b1',
    },
    content:{
        color:'#000',
        textAlign:'center',
        fontSize:16
    },
    element:{
        alignSelf:'center'
    }
});

export default styles;
