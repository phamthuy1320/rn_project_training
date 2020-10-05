import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerContent from './DrawerContent';

import MenuOptions from '../screens/MenuOptions';
import MainScreen from '../screens/MainScreen';
import Logout from '../screens/Logout';
import ProfileSetting from '../screens/ProfileSetting'
import FolderTask from '../screens/FolderTask';
import ToDo from '../screens/ToDo';
import AddTask from '../screens/AddTask';
import CalendarView from '../screens/CalendarView';

const Drawer = createDrawerNavigator();

export default function MainDrawer(){
    return (
      <Drawer.Navigator drawerContent={DrawerContent}>
        <Drawer.Screen name="Main" component={MainScreen} />
        <Drawer.Screen
          name="Profile"
          component={ProfileSetting}
          options={{gestureEnabled: false}}
        />
        <Drawer.Screen
          name="FolderTask"
          component={FolderTask}
          options={{gestureEnabled: false}}
        />
        <Drawer.Screen name="Menu" component={MenuOptions} />
        <Drawer.Screen
          name="ToDo"
          component={ToDo}
          options={{gestureEnabled: false}}
        />
        <Drawer.Screen
          name = "Calendar"
          component = {CalendarView}
        />
         <Drawer.Screen name = 'Add' component = {AddTask}/>
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
    );
}