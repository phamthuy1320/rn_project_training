import React,{useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, Image,ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './styles';
import {Button, Input, AlertHeader} from '../../components';
import database from '../../services/firebases';
import {setToken} from '../../redux/actions';

const imgURL = 'https://stories.freepiklabs.com/storage/11464/telecommuting-pana-2447.png';

export default function SignupScreen({navigation}){
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [repassword, setRepassword] = useState(null);
  const [isExisted, setExisted] = useState(null);
  const [alertHeader,setAlertHeader] = useState(null);
  const [isFail, setFail] = useState(true);
  // const dispatch = useDispatch();

  const clear = ()=>{
    setEmail(null);
    setUserName(null);
    setPassword(null);
    setRepassword(null);
    setAlertHeader(null);
    setExisted(null);
    setFail(true);
  }
  const checkExist = ()=>{
    try {  
        database.ref('users').once('value')
        .then(
            (snapshot) =>{
                snapshot.forEach(
                    (data)=>{
                        const _user = data.child('username').val();
                        console.log(_user);
                        if(_user == userName){
                            setExisted(true)
                        }else {setExisted(false)};
                    }
                )
            }
        )
    } catch (error) {
        setAlertHeader(error)
    }
  }

  const checkVerify = () => {
      setFail(true);
     if( password == repassword ){
        checkExist();
        if(isExisted == true){
          setAlertHeader('Account existed')
        }
        else{
          try {
              database.ref('users').push({
                "userId":userName,//2809
                "usename":userName,
                "email":email,
                "password":password,
                "avatar":"https://iupac.org/wp-content/uploads/2018/05/default-avatar.png",
                "fullName":userName,
                "description":"abc"
              })
              // dispatch(setToken(userName))
              setFail(false)
              setAlertHeader('Successed! Now you can use this account to Login!')
              clear();
          } catch (error) {
              setAlertHeader(error)
          }
        }
        }
      else{
          setAlertHeader('Password and verify are not same')
      }
  }
  return (
      <View style = {styles.container}>
        <View style = {styles.imageContainer}>
         {alertHeader!==null?<AlertHeader alert = {alertHeader} fail = {isFail}/>:<View style = {{height:50}}/>}
          <Image source = {{uri:imgURL}} style = {styles.image}/>
          <View style = {{height:100}}/>
        </View>
        
        <View style = {styles.inputContainer}>
  
            <Input 
                value = {email}
                onChangeText = {text => setEmail(text)}
                placeholder = 'Email'
                alert = 'please fill Email'
            />
          <Input 
            value = {userName}
            onChangeText = {text => setUserName(text)}
            placeholder = 'User name '
            alert = ' Please fill user name'
          />
          <Input 
            value = {password}
            onChangeText = {text => setPassword(text)}
            placeholder = 'Password'
            alert = 'Please fill password'
            secureTextEntry = {true}
          />
          <Input 
            value = {repassword}
            onChangeText = {text => setRepassword(text)}
            placeholder = 'Confirm password'
            alert = 'Please fill confirm password'
            secureTextEntry = {true}
          />
          <Text style = {styles.clear} onPress = {clear}>Clear Form </Text>
        </View>
        <View style = {styles.buttonContainer}>
          <Button title ='Sign up' onPress = {checkVerify}/>
          <Text style = {styles.textButton1}>Have an account? 
              <Text style = {styles.textButton} 
                onPress = {()=>{navigation.goBack()}}
              > Login</Text>
          </Text>
        </View>
      </View>
  )
}