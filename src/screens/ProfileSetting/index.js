import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Button
} from 'react-native';
import styles from './styles';
import ImagePicker from 'react-native-image-picker';

function ItemSetting(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.item_setting}>
      <Text style={[styles.item_setting_text,props.style]}>{props.name}</Text>

      <Image
      style={{width:20,height:20,}}
      source={require('../../assets/icon/icon-forward-dark.png')} />
    </TouchableOpacity>
  );
}

const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default function ProfileSetting({route, navigation}) {
  const {user} = route.params;

  const [avatarSource, setAvatarSource] = useState(null);
  const [isEdit,setIsEdit] = useState(true);
  const [name,setName] = useState(user.name);
  const [info,setInfo] = useState(user.info);


  const showImagePickerDialog = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // this.setState({
        //   avatarSource: source,
        // });
        setAvatarSource(source);
        
      }
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.container_header}>
        <View style={styles.container_avatar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/icon/icon-back-dark.png')}
              style={styles.iconBack}
            />
          </TouchableOpacity>
          <Text
            style={{fontWeight: 'bold', marginHorizontal: 30, fontSize: 25}}>
            Settings
          </Text>
        </View>

        <ImageBackground
          borderRadius={50}
          source={avatarSource === null ? user.img : avatarSource}
          style={styles.avatar}
        
          >
          <TouchableOpacity
            style={styles.editButton}
            onPress={showImagePickerDialog}>
            <Image
              source={require('../../assets/icon/icon-edit-avatar.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
        </ImageBackground>

        <View style={{flexDirection: 'row'}}>
          <TextInput
            editable={isEdit}
            defaultValue={name}
            style={[
              styles.editText,
              !isEdit
                ? {color: 'black', borderBottomWidth: 0}
                : {color: '#333444'},
            ]}
            onChangeText={(text) => setName(text)}
            onSubmitEditing={() => setIsEdit(false)}
          />
          <TextInput
            editable={isEdit}
            defaultValue={info}
            style={[
              styles.editText,
              !isEdit
                ? {color: 'black', borderBottomWidth: 0}
                : {color: '#333444'},
            ]}
            onChangeText={(text) => setInfo(text)}
            onSubmitEditing={() => setIsEdit(false)}
          />
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setIsEdit(isEdit === true ? false : true)}>
            <Image
              source={
                !isEdit
                  ? require('../../assets/icon/icon-edit-dark.png')
                  : require('../../assets/icon/icon-edit.png')
              }
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          top: -20,
          backgroundColor: '#fff9ec',
          height: 20,
        }}
      />
      <ScrollView
        style={styles.container_setting}
        showsVerticalScrollIndicator={false}>
        <ItemSetting name="Edit profile" onPress={() => alert('Edit ')} />
        <ItemSetting name="Push notification" onPress={() => alert('Push Notification ')} />
        <ItemSetting name="Connect Google Calender" onPress={() => alert('Connect Google Calender ')}  />
        <ItemSetting name="Multi language" onPress={() => alert('Multi language ')}  />
        <ItemSetting name="Version supported ?"  onPress={() => alert(`Version supported ?`)} />
        <ItemSetting name="Logout" style={{color: 'red'}}  onPress={() => navigation.navigate('Logout')} />
      </ScrollView>
    </View>
  );
}
 