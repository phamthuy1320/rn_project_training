import React,{useState, useCallback, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import database from '../../services/firebases';

export default function CalendarView(){
 const [todos, setTodos] = useState();
 const getTodo  = useCallback(()=>{
   try {
     database.ref('todos').once('value')
     .then(
       (snapshot)=>{
         let _todos = [];
         snapshot.forEach(
           (data)=>{
            _todos = [..._todos, data.val()]
           }
         )
         setTodos(_todos);
       }
     )
   } catch (error) {
     
   }
 },[])

 useEffect(getTodo,[])
  return (
    <View>
      <FlatList
        data={todos}
        renderItem = {
          ({item})=><Text>{JSON.stringify(item)}</Text>
        }
      />
    </View>
    
  )
}