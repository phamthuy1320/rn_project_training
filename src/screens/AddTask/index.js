import React,{useEffect, useState, useCallback} from 'react';
import {View, Text, ScrollView,FlatList,TouchableOpacity,TextInput, Dimensions, Platform, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import {Input, Button, MyDatePicker, TextBox, AlertHeader} from '../../components';
import moment from 'moment';
import database from '../../services/firebases';
import * as _ from 'lodash';
import {useSelector} from 'react-redux';

const screen_height = Dimensions.get('screen').height;
const screen_width = Dimensions.get('screen').width;

const Item = (props) =>{
  const choose_color = '#f6546a';
  const not_choose_color = '#b2b1b1'
  return(
    <TouchableOpacity 
      style = {[styles.cateItemContainer,{backgroundColor:props.choose?choose_color:not_choose_color}]}
      onPress = {props.onPress}
    >
      <Text style = {styles.cateItem}>{props.item.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}
const FolderList = (props) =>{
  return(
    <FlatList
      data = {_.sortedUniq(props.data)}
      renderItem = {({item})=>
      <View style = {{width:screen_width/3.25}}>
      {props.choose==item?
        <Item item = {item} choose
          onPress = {()=>{props.setChoose(null)}}
        key = {item}
        />:<Item item = {item}
        onPress = {()=>{props.setChoose(item)}}
      key = {item}/>}
      </View>
    }
      numColumns={3}
      contentContainerStyle={styles.flatlistContent}
      ItemSeparatorComponent = {()=>
        <View style = {styles.cateSeparator}/>
      }
      keyExtractor = {(item, index) =>index.toString()}
    />
  )
}
export default function AddTask({navigation}){
  const [folder, setFolder] = useState([]);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState(new Date());
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [desctiption, setDescription] = useState(null);
  const [location, setLocation] = useState(null);
  const [userId, setUserId] = useState(null);
  const [cateId, setCateId] = useState(null);
  const [isShow, setShow] = useState(false);
  const [type, setType] = useState('date');
  const [currFocus, setCurrFocus] = useState('date');
  const [alertHeader, setAlertHeader] = useState(null);
  const [isFail, setFail] = useState(true);

  const userInfo = useSelector(state=>state);
  const user = userInfo.reducer;

  const getFolder = useCallback( () =>{
    try {
      database.ref("categories").once("value")
      .then(
        (snapshot)=>{
          let _folder=[];
          snapshot.forEach(
            (data)=>{
              const item = data.child('name').val();
              _folder=[..._folder, item]
            }
          )
          setFolder(_.sortedUniq(_folder))
        }
      )

      try {
        database.ref('users').once('value')
       .then(
         (snapshot)=>{
           snapshot.forEach(
             (data)=>{
               const _userId = data.child('userId').val();
               const _username = data.child('usename').val();
               const _email = data.child('email').val();
               if(user==_username||user==_email){
                 setUserId(_userId);

               }
             }
           )
 
           console.log(userId)
         }
       )
     } catch (error) {
       
     }
    } catch (error) {
      console.log(error)
    }
  },[folder, userId])

  const clear = () =>{
    setCategory('');
    setTitle(null);
    setDate(new Date());
    setStart(new Date());
    setEnd(new Date());
    setLocation(null);
    setDescription(null);
    setAlertHeader(null)
  }
  const onSetDate = (event,selectedDate) => {
    setShow(!isShow);
    setType('date');
    setCurrFocus('date');
    const currentDate = selectedDate||date;
    console.log(currentDate)
    setDate(currentDate)
    };    

  const onSetStart = (event,selectedTime)=>{
    setShow(!isShow);
    setType('time');
    setCurrFocus('start');
    const currentTime = selectedTime||start;
    setStart(currentTime)
    setEnd(currentTime)
    
  }

  const onSetEnd = (event,selectedTime)=>{
    setShow(!isShow);
    setType('time');
    setCurrFocus('end');
    const currentTime = selectedTime||end;
    setEnd(currentTime)
    
  }
  useEffect(getFolder,[userId]);

  const UpFirebase = useCallback( ()=>{
    category==''?setCategory(null):null;
    title==null?setTitle(''):null;
    location==null?setLocation(''):null;
    desctiption==null?setDescription(''):null;
    const d1=new Date("Wed Sep 30 2020 17:33:30 GMT+0700 (+07)")
    const d2=new Date("Wed Sep 30 2020 17:55:30 GMT+0700 (+07)")
    console.log('distance',(d1.getTime()-d2.getTime())/60000)
    if(category!=null&&title!=null&&start!=end){
      try {
        database.ref('categories').once('value')
        .then(setCateId(null))
        .then(
          (snapshot)=>{
            let _cateId=null;
            snapshot.forEach(
              (data)=>{
                const _categoryId = data.child('categoryId').val();
                const _name = data.child('name').val();
                console.log('_name', _name)
                if(category==_name){
                 _cateId=_categoryId;
                }
              }
            )
            setCateId(_cateId);
            if(start==end){
              setFail(true)
              setAlertHeader('Set again start time and end time ')
            }else{
              database.ref("todos").push({
                "categoryId":_cateId,
                "date":moment(date).format('DD/MM/YYYY'),
                // "end":moment(end).format('hh:mm A'),
                "end":end.toString(),
                "location":location,
                "name":title,
                // "start":moment(start).format("hh:mm A"),
                "start":start.toString(),
                "state":'processing',
                "userId":userId
              })
              
              setAlertHeader('Success');
              setFail(false)
              clear();
            }
          }
        )
      } catch (error) {
        setAlertHeader('Dont\'t connect server')
      }
    }else{
      setAlertHeader('Fill all field!')
    }
  }
  )
  return (
    <ScrollView style={{flex:1,backgroundColor: '#fff9ec'}}>
      {alertHeader!==null?
        <AlertHeader alert = {alertHeader} fail = {isFail}
            element={
              <View style={styles.isAlertHeader}>
                    <Icon name = 'md-chevron-back' size = {22} onPress = {()=>navigation.toggleDrawer()}/>
                    <Text onPress = {clear} style  ={{textDecorationLine:'underline'}}>Clear</Text>
              </View>
            }
        />:
      <View style={styles.container_header}>
          <Icon name = 'md-chevron-back' size = {22} onPress = {()=>navigation.toggleDrawer()}/>    
          <Text onPress = {clear} style  ={{textDecorationLine:'underline'}}>Clear</Text>
      </View>
    }
    <View style = {[styles.container]} >
        <View style = {[styles.container_profile,{height:screen_height/3.5}]}>
          <View style = {styles.headerContent}>
            <Text style = {styles.title}>Create new task</Text>
            <Input title = 'Title' borderColor = '#000'
              value = {title} onChangeText = {(text)=>{setTitle(text)}}
              alert = 'Required'
            />
            <View style={styles.row}>
              <View style={{width: '80%'}}>
                <TextBox
                  element={
                    <Feather
                      name="chevron-down"
                      size={20}
                      color="#000"
                      onPress={onSetDate}
                    />
                  }
                  title="Date"
                  content={moment(date).format('dddd, DD/MM/YYYY')}
                />
              </View>
              <Feather
                name="calendar"
                size={22}
                color="#fff"
                style={styles.icon}
                onPress={() => navigation.navigate('Calendar')}
              />
            </View>
          </View>
        </View>

        <View style={styles.setTime}>
          <View style={styles._2column}>
            <TextBox
              title="Start time"
              element={
                <Feather
                  name="chevron-down"
                  size={20}
                  color="#000"
                  onPress={onSetStart}
                />
              }
              content={moment(start).format('hh:mm A')}
            />
          </View>
          <View style={styles._2column}>
            <TextBox
              title="End time"
              element={
                <Feather
                  name="chevron-down"
                  size={20}
                  color="#000"
                  onPress={onSetEnd}
                />
              }
              content={moment(end).format('hh:mm A')}
            />
          </View>
        </View>
        <View style={styles.detailItem}>
          <Input
            title="Location"
            borderColor="#000"
            icon={<Icon name="location" size={22} color="#b2b1b1" />}
            value={location}
            onChangeText={(text) => {
              setLocation(text);
            }}
            alert="Required"
          />
        </View>
        <View style={styles.detailItem}>
          <Input
            title="Description"
            borderColor="#000"
            multiline
            value = {desctiption} 
            onChangeText = {(text)=>{setDescription(text)}}
            alert = 'Required'
       />
      </View>

        <Text style = {styles.detailItem}>Category{category==null?<Text style = {{color:'red', fontSize:13}}> (Required)</Text>:null}</Text>
     
        <FolderList data = {_.sortedUniq(folder)} choose = {category}
          setChoose = {setCategory}
        />

    {isShow?(type=='date'?
      <MyDatePicker 
        mode="date" 
        value={date}
        onChange = {(e,d)=>onSetDate(e,d)}
        />:(
          currFocus =="start"?
          <MyDatePicker 
          mode="time" 
          is24Hour={false}
          display="spinner"
          value={start}
          onChange = {(e,d)=>onSetStart(e,d)}
          />:
          <MyDatePicker 
          mode="time" 
          value={end}
          is24Hour={false}
          display="spinner"
          onChange = {(e,d)=>onSetEnd(e,d)}
          />)
      ):<View style = {styles.detailItem}>
      <Button title = 'Create task' 
        backgroundColor = '#75d2f6' color='#fff' 
        onPress = {UpFirebase}
      />
    </View>}
   </View>
  </ScrollView>
  )
}
