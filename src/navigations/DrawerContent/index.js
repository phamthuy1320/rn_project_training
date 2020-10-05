import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
export default function DrawerContent({navigation}){
  
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerContent}>Profile</Text>
        </View>
        <View style={styles.navigationContainer}>
          <TouchableOpacity
            style={styles.navigation}
            onPress={() => navigation.navigate('Profile',{user:''})}>
            <Text>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navigation}
            onPress={() => navigation.navigate('Main')}>
            <Text>Main</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navigation}
            onPress={() => navigation.navigate('Menu')}>
            <Text>Menu Options</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navigation}
            onPress={() => navigation.navigate('Add')}>
            <Text>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navigation}
            onPress={() => navigation.navigate('Logout')}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}