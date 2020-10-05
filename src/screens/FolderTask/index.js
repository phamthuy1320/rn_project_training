import React, {useState} from 'react';
import {
  View,
  Button,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import styles from '../FolderTask/styles';
import Swipeout from 'react-native-swipeout';

const screen = Dimensions.get('screen');
const iconBack = require('../../assets/icon/icon-back-dark.png');

function TaskItem({item}) {
  return (
    <View>
      <Text style={styles.task_item_name}>{item.item.text}</Text>
    </View>
  );
}

export default function FolderTask({route, navigation}) {
  const {data, category_name} = route.params;

  let [activeRowKey, setActiveRowKey] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.container_header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={iconBack} style={styles.iconBack} />
        </TouchableOpacity>
        <Text style={styles.category_name}>{category_name}</Text>
      </View>
      <FlatList
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={(item) => {
          return (
            <Swipeout
              style={styles.container_task_item}
              autoClose={true}
              onClose={(setId, rowId, direction) => {
                setActiveRowKey: null;
              }}
              onOpen={(setId, rowId, direction) => {
                setActiveRowKey: null;
              }}
              buttonWidth={screen.width - 140}
              left={[
                {
                  onPress: () => {
                    alert('Edited!');
                  },
                  text: 'Edit',
                  type: 'primary',
                },
              ]}
              right={[
                {
                  onPress: () => {
                    Alert.alert('Delete', 'Are You sure ?', [
                      {
                        text: 'No',
                        onPress: () => {
                          alert('No ?');
                        },
                        style: 'cancel',
                      },
                      {
                        text: 'Yes',
                        onPress: () => {
                          alert('Yes ?');
                        },
                      },
                    ]);
                  },
                  text: 'Delete',
                  type: 'delete',
                },
              ]}
              rowId={item.index}
              sectionId={1}>
              <TaskItem item={item} />
            </Swipeout>
          );
        }}
      />
    </View>
  );
}
