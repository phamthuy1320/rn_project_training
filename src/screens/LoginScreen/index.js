import React,{useState, useCallback, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity,ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './styles';
import {Button, Input,AlertHeader} from '../../components';
import {setToken} from '../../redux/actions';
import database from '../../services/firebases';

const imgURL = 'https://image.freepik.com/free-vector/internet-assistant-work_132971-57.jpg'
const imgFb = 'https://img.icons8.com/color/2x/facebook.png';
const imgGm = 'https://img.icons8.com/color/2x/google-logo.png';

export default function LoginScreen({navigation}){
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [alertHeader,setAlertHeader] = useState(null);
  const dispatch = useDispatch();

  const clear = () => {
    setUserName(null);
    setPassword(null);
    setAlertHeader(null);
  }
  const checkAccount = async() =>{
    setAlertHeader(null);
    try {
      await database.ref('users').once('value')
      .then(
        (snapshot)=>{
         snapshot.forEach(
           (data) =>{
            const _user = data.child('username').val();
            const hasEmail = data.hasChild('email');
            const _password = data.child('password').val();
            if(hasEmail===false){
              _user == userName && _password == password?dispatch(setToken(userName)):
              setAlertHeader('User name/email or password is wrong! ');
            }else{
              const _email = data.child('email').val();
              (_email == userName||_user == userName) && _password == password?dispatch(setToken(userName)):
              setAlertHeader('User name/email or password is wrong! ');
            }
           }
          )
        }
      )
    } catch (error) {
      setAlertHeader('don\'t connect firebase, can\'t get data')
    }
   
  }
  return (
    <View style = {styles.container}>
      <View style = {styles.imageContainer}>
        {alertHeader!==null?<AlertHeader alert = {alertHeader} fail = {true}/>:<View style = {{height:50}}/>}
        <Image source = {{uri:imgURL}} style = {styles.image}/>
      </View>
      <View style = {styles.inputContainer}>
        <Input
          value = {userName}
          onChangeText = {text => setUserName(text)}
          placeholder = 'User name or email'
          alert = 'please fill user name'
        />
        <Input  
          value = {password}
          onChangeText = {text => setPassword(text)}
          placeholder = 'Password'
          secureTextEntry = {true}
          alert = 'please fill password'
        />
        <Text style={styles.clear} onPress={clear}>Clear Form</Text>
      </View>
      <View style = {styles.buttonContainer}>
        <TouchableOpacity onPress = {()=>navigation.navigate('Forgot',[{email:userName}])}>
            <Text style = {styles.textButton}>Forgot password</Text>
        </TouchableOpacity>
  
        <Button title ='Login' onPress = {checkAccount}/>

        <View style = {styles.social}>
            <TouchableOpacity style = {{borderRightWidth:1, marginRight:20, paddingRight:20, height:40}}>
              <Image style = {styles.socialimg} source = {{uri:imgGm}}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style = {styles.socialimg} source = {{uri:imgFb}}/>
            </TouchableOpacity>
          </View>

          <Text style = {styles.textButton1}>Don't have an account? 
            <Text style = {styles.textButton} 
              onPress = {() =>navigation.navigate('Signup')}
            > Create new account</Text>
          </Text>
      </View>
    </View>
  )
}