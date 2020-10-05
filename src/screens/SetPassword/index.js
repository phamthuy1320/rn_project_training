import React,{useState, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {dispatch} from 'react-redux';
import {Button, Input,AlertHeader} from '../../components';
import styles from './styles';
import database from '../../services/firebases';
import {removeToken} from '../../redux/actions';

export default function SetPassword({navigation}){
    const [email, setEmail] = useState(null);
    const [currpw, setCurrpw] = useState(null);
    const [newpw, setNewpw] = useState(null);
    const [confirm, setConfirm] = useState(null);
    const [alertHeader, setAlertHeader] = useState(null);
    const [alertFail, setAlertFail] = useState(true);

    const clearForm = () =>{
        setAlertHeader(null);
        setEmail(null);
        setCurrpw(null);
        setNewpw(null);
        setConfirm(null);
    }
    const checkFill = (email==null||currpw==null||newpw==null||confirm==null)?false:true

    const checkConfirm = newpw===confirm?true:false;
    
    const returnLogin = () =>{
        // dispatch(removeToken());
        navigation.navigate('Login');
    }

    const updatePw = async() =>{
     try {
        let key = null;//to take key of account in firebase;
        setAlertHeader(null);
        setAlertFail(true);
        console.log(checkFill)
        if(checkFill==false){
            setAlertHeader('Please fill all field')
        }else{
            // await database.ref('account').once('value')
            await database.ref('users').once('value')
            .then(
                (snapshot)=>{
                    snapshot.forEach(
                        (data)=>{
                            const hasEmail = data.hasChild('email');
                            if(hasEmail){
                                const _email = data.child('email').val();
                                const _password = data.child('password').val();
                                if(_email==email){
                                    if(_password == currpw){
                                        if(checkConfirm){key = data.key.toString()}
                                        else{
                                            setAlertHeader('New password must be different current password!')
                                        }
                                    }else{
                                        setAlertHeader('Current password is wrong!')
                                    }
                                }
                            }else{
                                setAlertHeader('Email is not found!')
                            }
                        }
                    )
                }
            )
            if(key!=null){
                try {
                    if(newpw!=currpw){
                        // database.ref('account/'+key).update({
                        database.ref('users/'+key).update({
                            "password":newpw
                        })
                        setAlertHeader('Successed! You can use new password!');
                        setAlertFail(false);
                        setTimeout(returnLogin,1000)
                    }
                } catch (error) {
                    setAlertHeader('Can\'t connect server!')
                }
            }
         }
     } catch (error) {
         setAlertHeader('Can\'t connect server')
     }   
    }
    
    return (
        <View style = {styles.container}>
            {alertHeader!==null?<AlertHeader alert = {alertHeader} fail = {alertFail}/>:<View style = {{height:50}}/>}
            <View style = {styles.inputContainer}>
                <Input placeholder = 'Email'
                    value = {email} onChangeText = {(text) =>setEmail(text)}
                    alert = 'Fill email'
                />
                <Input placeholder = 'Current password'
                    value = {currpw} onChangeText = {(text) =>setCurrpw(text)}
                    alert = 'Fill current password'
                    secureTextEntry
                />
                <Input placeholder = 'New password' 
                    value = {newpw} onChangeText = {(text) =>setNewpw(text)}
                    alert = 'Fill new password'
                    secureTextEntry
                />
                <Input placeholder = 'Confirm password' 
                    value = {confirm} onChangeText = {(text) =>setConfirm(text)}
                    alert = 'Fill comfirm password'
                    secureTextEntry
                />
                <TouchableOpacity onPress = {clearForm}>
                    <Text style = {styles.clear}>Clear Form</Text>
                </TouchableOpacity>
            </View>
            <View style = {[styles.buttonContainer,{justifyContent:'flex-start'}]}>
                <Button title = 'Set up' onPress = {updatePw}/>
                <Text style = {styles.textButton}
                    onPress = {()=>navigation.navigate('Login')}
                >Return login</Text>
            </View>
        </View>

    )
}