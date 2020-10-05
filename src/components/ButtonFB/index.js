import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles';

export function ButtonFB(props){
    return (
        <TouchableOpacity onPress = {props.onPress} style = {[styles.container,{ backgroundColor:'#000f64',}]}>
            <Icon name = "facebook-square" size = {22} color = '#fff'/>
            <Text style = {styles.title}>Login with Facebook</Text>
        </TouchableOpacity>
    )
}

export function ButtonGm(props){
    return (
        <TouchableOpacity onPress = {props.onPress} style = {[styles.container,{ backgroundColor:'#f74451'}]}>
            <Icon1 name = "gmail" size = {22} color = '#fff'/>
            <Text style = {styles.title}>Login with Gmail </Text>
        </TouchableOpacity>
    )
}