
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  StatusBar,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SwipeListView } from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Notifications from './data';
import styles from './style'
const NotificationScreen = ({ navigation }) => {
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December	']
  const day = new Date().getDate();
  const Month = monthNames[new Date().getMonth()]
  var weekOfDay = new Date().getDay();
  switch (new Date().getDay()) {
    case 0:
      weekOfDay = "Sunday";
      break;
    case 1:
      weekOfDay = "Monday";
      break;
    case 2:
      weekOfDay = "Tuesday";
      break;
    case 3:
      weekOfDay = "Wednesday";
      break;
    case 4:
      weekOfDay = "Thursday";
      break;
    case 5:
      weekOfDay = "Friday";
      break;
    case 6:
      weekOfDay = "Saturday";
  }
  const [listData, setListData] = useState(
    Notifications.map((NotificationItem, index) => ({
      key: `${index}`,
      title: NotificationItem.title,
      details: NotificationItem.details,
    })),
  );


  const deleteRow = (rowMap, rowKey) => {
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const VisibleItem = props => {
    const {
      data,
      rowHeightAnimatedValue,
      removeRow,
      rightActionState,
    } = props;

    if (rightActionState) {
      Animated.timing(rowHeightAnimatedValue, {
        toValue: 0,
        duration: 5,
        useNativeDriver: false,
      }).start(() => {
        removeRow();
      });
    }

    return (
      <View>
        <Animated.View
          style={[styles.rowFront, { rowHeightAnimatedValue }]}>
          <View>
            <Text style={ styles.text} numberOfLines={1}>
              {data.item.title}
            </Text>
          </View>
        </Animated.View>
      </View>
    );
  };
  

  const renderItem = (data, rowMap) => {
    const rowHeightAnimatedValue = new Animated.Value(60);

    return (
      <VisibleItem
        data={data}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        removeRow={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  const HiddenItemWithActions = props => {
    const {
      swipeAnimatedValue,
      rightActionActivated,
      rowActionAnimatedValue,
      rowHeightAnimatedValue,
      onDelete,
    } = props;

    if (rightActionActivated) {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 600,
        useNativeDriver: false
      }).start();
    } else {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 75,
        useNativeDriver: false
      }).start();
    }

    return (

      <Animated.View style={[styles.rowBack, { height: rowHeightAnimatedValue }]}>
        <Animated.View style={[styles.backRightBtn, styles.backRightBtnRight,]
        }>
          <TouchableOpacity onPress={onDelete} >
            <Animated.View
              style={[
                styles.trash,
                {
                  transform: [
                    {

                      scale: swipeAnimatedValue.interpolate({
                        inputRange: [-90, -45],
                        outputRange: [1, 0],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                },
              ]}>
              <MaterialCommunityIcons
                name="trash-can-outline"
                size={25}
                color="#fff"
              />
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    );
  };

  const renderHiddenItem = (data, rowMap) => {
    const rowActionAnimatedValue = new Animated.Value(75);
    const rowHeightAnimatedValue = new Animated.Value(60);

    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        rowActionAnimatedValue={rowActionAnimatedValue}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  return (

    <View style={styles.container}>
      <View style={styles.viewHeader} >
        <View style={styles.container_header}>
          <Icon name='md-chevron-back' size={22} onPress={() => {
            navigation.navigate('Main')
          }} />
          <View style={{ marginTop: -35 , marginLeft: 20, }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }} > Task To Day</Text>
            <Text>  {weekOfDay}, {Month}, {day}</Text>
          </View>
        </View>
      </View>

      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        disableRightSwipe
        leftActivationValue={100}
        rightActivationValue={-200}
        leftActionValue={0}
        rightActionValue={-500}
      />
    </View>

  );
};
export default NotificationScreen;
