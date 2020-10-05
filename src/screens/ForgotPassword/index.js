import React,{useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {Input, Button, AlertHeader} from '../../components';
import database from '../../services/firebases';
import {email as sendEmail, text as sendSMS} from 'react-native-communications';

const codeVerify = '1234';
export default function ForgotPassword({route,navigation}){
    const [email, setEmail] = useState(route.params?.email);
    const [alert, setAlert] = useState(null);
    const [alertHeader, setAlertHeader] = useState(null);
    const [verify,setVerify] =useState(null);

    const clear = () =>{
        setEmail(null);
        setAlertHeader(null);
        setAlert(null);
        setVerify(null);
    }
    const searchAccount = async () => {
        setAlert(null);
        setAlertHeader(null);
        try {
           await database.ref('users').once('value')
            .then( (snapshot) =>{
                snapshot.forEach(
                    (data)=>{
                        const hasEmail = data.hasChild('email');
                        console.log('hasemail',hasEmail)
                        if(hasEmail == true){
                            const _email = data.child('email').val();
                            if(_email==email){
                                if(verify==codeVerify){
                                    const _password = data.child('password').val();
                                    setAlert('Your current password: '+ _password);
                                    setAlertHeader(null)
                                }else{
                                    setAlertHeader('Verify code is wrong!')
                                }
                            }
                            if(verify==null || verify == ''){
                                setAlertHeader('You must fill verify code field!');
                            }
                        }else{
                            setAlertHeader('Email is not found!')
                        }
                    }
                )
            })
            
        } catch (error) {
            
        }
    }


    // const sendCode = () =>{
    //     //send verify code
    //     sendSMS('0375518575','1234')
    //     // sendEmail(['phamthithuy1320@gmail.com', 'thuybeo1320@gmail.com'],null,null,'Demo Subject','Demo Content for the mail')
    // }
    return(
        <View style = {styles.container}>
            {alertHeader!==null?
                <AlertHeader alert = {alertHeader} fail
                    element={
                        <View style = {{paddingHorizontal:10}}>
                            <Icon name = 'md-chevron-back' size = {22} onPress = {()=>navigation.navigate('Login')}/>
                            {/* <Icon name = 'arrow-back' size = {22} onPress = {()=>navigation.navigate('Login')}/> */}
                        </View>
                    }
                />:
                <View style = {{height:50, paddingHorizontal:10}}>
                    <Icon name = 'arrow-back' size = {22} onPress = {()=>navigation.navigate('Login')}/>    
                </View>
            }
            <View style = {styles.inputContainer}>
                <Input 
                    value = {email}
                    onChangeText = {text => setEmail(text)}
                    alert = 'Please fill email'
                    placeholder = 'email'
                />
                <Text style = {styles.verifyInfo}>Enter Verify Code</Text>
                <View style = {styles.verify}>
                    <Input value = {verify} 
                        onChangeText = {(text)=>setVerify(text)} 
                        alert = 'Fill verify' numeric ={true}
                        placeholder = 'Verify code'
                        center
                    />
                </View>
                <TouchableOpacity onPress = {clear}>
                    <Text style = {styles.clear}>Clear Form</Text>
                </TouchableOpacity>                                                                                     
            </View>                                 
            
            <View style = {[styles.buttonContainer,{justifyContent:'flex-start'}]}>
                <Button title = 'Check' onPress = {searchAccount}/>
                
                {alert!==null?<View style = {styles.alert}>
                    <Text style = {styles.info}>{alert}</Text>
                </View>:null}
                <TouchableOpacity onPress = {()=>navigation.navigate('SetPassword')}>
                    <Text style = {styles.textButton}>Set password</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}