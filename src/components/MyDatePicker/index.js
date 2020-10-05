import React, {useState} from 'react';
import {View, Modal, TouchableOpacity, Text} from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';
import styles from './styles';
import moment from 'moment';

export default function MyDatePicker (props){
    return (
        <View style = {styles.container}>
            <DatePicker
                {...props}
            />
        </View>

    )
}