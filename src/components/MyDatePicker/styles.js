import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
         width:'100%',
         justifyContent:'center',
         alignContent:'center',
         alignItems:'center',
         backgroundColor:'#fff'
    },
    done:{
         alignSelf:'flex-end',
         marginRight:20,
         height:30,
         backgroundColor:'#fff'
    },
    text:{
        color:'blue',
        textAlignVertical:'center',
        fontSize:16
    }
})

export default styles;
