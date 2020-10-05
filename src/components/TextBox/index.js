import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default function TextBox(props){
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>{props?.title||' '}</Text>
            <View style = {styles.box}>
                {/* <View style = {styles.element}> */}
                    <Text styles = {[styles.element,styles.content]}>{props?.content}</Text>
                {/* </View> */}
                <View style = {styles.element}>
                 {props?.element}
                </View>
            </View>
        </View>
    )
}