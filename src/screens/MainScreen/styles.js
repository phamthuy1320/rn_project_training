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
  container_profile: {
    backgroundColor: '#f9be7c',
    height: screen_height / 5,
    borderBottomRightRadius: screen_width / 7,
    borderBottomLeftRadius: screen_width / 7,
  },
  container_myTask: {},
  container_folderTask: {
    flexDirection: 'column',
    marginLeft: 18,
  },
  container_header: {
    flexDirection: 'row',
    position: 'relative',
    top: 0,
    right: 0,
    backgroundColor: '#f9be7c',
    justifyContent: 'space-between',
    padding: 8,
    alignItems: 'center',
  },
  container_avatar: {
    borderRadius: 100,
    borderColor: '#e46472',
    marginLeft: 25,
    borderBottomWidth: 7,
    borderRightWidth: 7,
  },

  myTask_toDo: {
    backgroundColor: '#e46472',
    width: screen_width / 8.5,
    height: screen_width / 8.5,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  folderTask: {
    width: screen_width / 2.6,
    height: screen_width / 2,
    backgroundColor: '#e46472',
    borderRadius: 40,
    marginHorizontal: 12,
    marginVertical: 12,
  },
  calender_icon: {
    width: screen_width / 7,
    height: screen_width / 7,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  task_text: {
    color: 'gray',
    marginRight: 4,
    fontSize: 13,
    
  },
  todo_task: {
    flexDirection: 'row',
    margin: 8,
    marginHorizontal: 12,
    alignItems: 'center',
 
  },
  title_task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 18,
    marginHorizontal: 20,
  },

  profile_avatar: {
    width: screen_width / 4,
    height: screen_width / 4,
    borderRadius: 50,
    margin: 4,
  },
  profile_name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  profile_info: {
    fontSize: 18,
  },

  text_folder_task: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    left: 18,
    marginTop: screen_width / 3,
  },
  text_hour_folder_task: {
    color: '#e1e1e1',
    left: 18,
  },
  search_text: {
    width: screen_width / 2,
    backgroundColor: '#fffaec',
    borderRadius: 10,
    left: 40,
    height: 35,
    color: 'gray',
    paddingHorizontal: 8,
    fontSize: 13,
  },
});

export default styles;
