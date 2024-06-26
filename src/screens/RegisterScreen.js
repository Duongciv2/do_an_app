import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import localhost from "../Utils/LocalHost";

export default function RegisterScreen({ navigation }) {
  const navigationHelper = useNavigation();
  const [firstName, setFirstName] = useState({ value: '', error: '' });
  const [lastName, setLastName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const onSignUpPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    // Chỉ gọi handleSubmit khi không có lỗi
    handleSubmit();
  };

  function handleSubmit() {
    const userData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    };

    console.log("Dữ liệu người dùng:", userData);
    axios
      .post("http://${localhost.localhost}:5001/register", userData)
      .then((res) => {
        console.log(res.data);
        navigationHelper.replace('LoginScreen');
      })
      .catch((e) => console.log(e));
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Tạo tài khoản mới</Header>
      <TextInput
        label="First Name"
        returnKeyType="next"
        value={firstName.value}
        onChangeText={(text) => setFirstName({ value: text, error: '' })}
      />
      <TextInput
        label="Last Name"
        returnKeyType="next"
        value={lastName.value}
        onChangeText={(text) => setLastName({ value: text, error: '' })}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Mật khẩu"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button mode="contained" onPress={onSignUpPressed} style={{ marginTop: 24 }}>
        Đăng ký
      </Button>
      <View style={styles.row}>
        <Text>Bạn đã có tài khoản </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 3,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});