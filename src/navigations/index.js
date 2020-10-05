import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RegisterStack from './RegisterStack';

export default function AppNavigation(){
    return (
        <NavigationContainer>
            <RegisterStack/>
        </NavigationContainer>
    )
}