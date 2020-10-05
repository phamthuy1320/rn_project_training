import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
const screen_width = Dimensions.get('screen').width;
const screen_height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff9ec',
    flex: 1,
    flexDirection: 'column',
  },
  container_avatar: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },

  container_header: {
    backgroundColor: '#f9b37c',
    // borderBottomRightRadius:50,
    // borderBottomLeftRadius:50,
    alignItems: 'center',
    padding: 10,
    height: screen_height / 3,
  },
  container_setting: {
    backgroundColor: '#fff9ec',
    height: screen_height,
    paddingTop:0
  },
  avatar: {
    width: 100,
    height: 100,
    justifyContent: 'flex-end',
    padding: 2,
    backgroundColor:'#c3c3c3',
    borderRadius:50
  },
  iconBack: {
    width: 25,
    height: 25,
  },
  editText: {
    width: screen_width / 4,
    margin: 4,
    height: 25,
    padding: 4,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  editButton: {
    alignSelf: 'flex-end',
    borderRadius: 50,
  },
  item_setting: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:15,
    margin:4,
    marginHorizontal:8,
    backgroundColor:'#fff5e5',
    borderRadius:10,
    elevation:1,
    height:50

  },
  item_setting_text:{
    fontSize:20,

  }
});
export default styles;
