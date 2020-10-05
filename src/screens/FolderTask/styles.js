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
  container_task_item: {
    backgroundColor: '#e46472',
    marginHorizontal: 20,
    borderRadius: 5,
    marginTop: 5,
    width: screen_width - 40,
    justifyContent: 'center',
  },
  task_item_name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
    padding: 10,
  },
  container_header: {
    backgroundColor: '#fff9ec',
    padding: 8,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  iconBack: {
    width: 25,
    height: 25,
  },
  category_name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 30,
    color: '#0d253f',
  },
});

export default styles;
