import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function Button (props) {
    return (
        <TouchableOpacity 
            style = {[styles.container,
                props.backgroundColor?{backgroundColor:props.backgroundColor}:null
            ]}

            onPress = {props.onPress}
        >
            <Text style = {[styles.title,
                props.color?{color:props.color}:null
            ]}>{props.title}</Text>
        </TouchableOpacity>
    )
}