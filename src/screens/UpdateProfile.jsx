import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Avatar } from 'react-native-paper';
import styles from './stylesProfileEdit';
import Back from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

function UpdateProfile() {
  const [image, setImage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const route = useRoute();

  const selectPhoto = () => {
    // Code for selecting photo
  };

  useEffect(() => {
    const userData = route.params.data;
    setEmail(userData.email);
    setImage(userData.image);
    setFirstName(userData.firstName);
    setLastName(userData.lastName);
  }, []);

  const updateProfile = () => {
    const formdata = {
      firstName,
      lastName,
      image,
      email,
    };
    console.log(formdata);
    axios
      .post('http://172.20.10.7:5001/update-user', formdata)
      .then(res => {
        console.log(res.data);
        if (res.data && res.data.status === "Ok") {
          Toast.show({
            type: 'success',
            text1: 'Updated',
          });
        } else {
          // Xử lý trường hợp phản hồi không hợp lệ
          console.error('Error updating profile:', res.data);
        }
      })
      .catch(error => {
        // Xử lý lỗi từ API
        console.error('Error updating profile:', error);
      });
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps={'always'}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Code for displaying header and camera icon */}

      <View style={{ marginTop: 50, marginHorizontal: 22 }}>
        <View style={styles.infoEditView}>
          <Text style={styles.infoEditFirst_text}>First Name</Text>
          <TextInput
            placeholder="First Name"
            placeholderTextColor={'#999797'}
            style={styles.infoEditSecond_text}
            onChange={e => setFirstName(e.nativeEvent.text)}
            defaultValue={firstName}
          />
        </View>

        <View style={styles.infoEditView}>
          <Text style={styles.infoEditFirst_text}>Last Name</Text>
          <TextInput
            placeholder="Last Name"
            placeholderTextColor={'#999797'}
            style={styles.infoEditSecond_text}
            onChange={e => setLastName(e.nativeEvent.text)}
            defaultValue={lastName}
          />
        </View>

        <View style={styles.infoEditView}>
          <Text style={styles.infoEditFirst_text}>Email</Text>
          <TextInput
            editable={false}
            placeholder="Email"
            placeholderTextColor={'#999797'}
            style={styles.infoEditSecond_text}
            onChange={e => setEmail(e.nativeEvent.text)}
            defaultValue={email}
          />
        </View>
      </View>

      {/* Code for update profile button */}
    </ScrollView>
  );
}

export default UpdateProfile;