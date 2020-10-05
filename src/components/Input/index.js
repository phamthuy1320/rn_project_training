import React,{useState, useEffect} from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';

export default function Input (props){
    const [alert, setAlert] = useState(null);

    useEffect(() =>{
        props?.value==''?setAlert(props?.alert):setAlert(null)
    })
    return(
        <View style = {styles.container}>
            {/* {props?.title?
                <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style = {styles.title}>{props.title}</Text>
                </View>    
                    :null
            } */}
            <Text style = {styles.title}>{props.title}</Text>
            <View style = {[{flexDirection:'row'},props?.icon?{width:'95%'}:null]}>
                <View style={styles.icon} >
                    {props?.icon}
                </View>
                <TextInput
                    style = {[
                        props?.box?styles.inputBox:styles.input,
                        props?.borderColor?{borderBottomColor:props.borderColor}:null,
                        props?.multiline?{height:65}:null,
                        props?.center?{textAlign:'center'}:null
                    ]}
                    keyboardType = {props?.numeric==true?'numeric':'default'}
                    multiline  ={props?.multiline}
                    {...props}
                    
                />
            </View>
            <Text style = {[styles.alert,props?.center?{textAlign:'center'}:null]}>{alert}</Text>
        </View>
    )
};
