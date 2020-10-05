import { fromPairs } from 'lodash';
import React from 'react';
import {
  Dimensions,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
const { width, height } = Dimensions.get('screen')
import styles from './style'
import { color } from 'react-native-reanimated';



export default function welcomeScreen({ navigation }) {
  const Img = {
    imgWork1: require('../../assets/banner/work1.png'),
    imgWork2: require('../../assets/banner/work2.jpg'),
    imgWork3: require('../../assets/banner/work3.jpg'),

  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <ScrollView
          style={{ flex: 1 }}
          scrollEventThrottle={16}
          horizontal={true}
          pagingEnabled={true}
        >
        <View style={{ width, height }}>
        <Image source={Img.imgWork1} style={[styles.banner]}   ></Image>
        <Text style={styles.txttext}> Todo List App </Text>
        <Text style={styles.txtdiscription}> Manage your activities {`\n`} This application'll help you !
        </Text>
        <View style= {styles.bottomItem }>
          <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
            <Text style={styles.txtSkip  }>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
          <View style={{ width, height }}>
            <Image source={Img.imgWork2} style={[styles.banner]}   ></Image>
            <Text style={styles.txttext}> Notification  </Text>
            <Text style={styles.txtdiscription}> I'll remind you when ur work is coming {`\n`}Don't worry if you forgot do anything.
            </Text>
            <View style= {styles.bottomItem }>
              <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
                <Text style={styles.txtSkip  }>Skip</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ width, height, }}>
            <Image source={Img.imgWork3} style={[styles.banner]}></Image>
            <Text style={styles.txttext}>Cheer !!</Text>
            <Text style={styles.txtdiscription} > Let enjoy with us  {`\n`} Create some task
              </Text>
           <View style = {[ styles.bottomItem] }> 
           
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.txtSkip}>Skip</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[styles.btnContinue]}
                activeOpacity={0.7}
                
              ><Text style={styles.txtContinue}>Continue </Text></TouchableOpacity>
            
          </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}