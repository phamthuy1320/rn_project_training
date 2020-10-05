import React from 'react';
import {useDispatch} from 'react-redux';
import {View} from 'react-native'
import {removeToken} from '../../redux/actions';

export default function Logout({navigation}){
    const dispatch = useDispatch();
    dispatch(removeToken());
    return (
        <View/>
    )
}