import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector,useDispatch} from 'react-redux';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgotPassword from '../screens/ForgotPassword';
import SetPassword from '../screens/SetPassword';
import MainDrawer from './MainDrawer';
import {setToken} from '../redux/actions';
import welcomeScreen from '../screens/WelcomeScreen/index';
import ToDo from '../screens/ToDo';
 
const Stack = createStackNavigator();

export default function RegisterStack(){
    const dataStore = useSelector(state =>state);
    const token = dataStore.reducer;

    // const dispatch = useDispatch();
    // dispatch(setToken('user'));

    return (
        <Stack.Navigator screenOptions  ={{headerShown:false}}>
            {token===null?<>
                <Stack.Screen name = 'welcome' component = {welcomeScreen}/>
                <Stack.Screen name = 'Login' component = {LoginScreen}/>
                <Stack.Screen name = 'Signup' component = {SignupScreen}/>
                <Stack.Screen name = 'Forgot' component = {ForgotPassword}/>
                <Stack.Screen name = 'SetPassword' component = {SetPassword}/>
                <Stack.Screen name = 'Todo' component = {ToDo}/>
            </>
            :
            <Stack.Screen name = 'MainDrawer' component = {MainDrawer}/>}
        </Stack.Navigator>
    )
}