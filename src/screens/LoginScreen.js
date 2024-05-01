import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Alert, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import LoginService from '../components/LoginService';
import { theme } from '../core/theme';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import localhost from "../Utils/LocalHost";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
    } else {
      setIsLoading(true);
      const userData = {
        email: email.value,
        password: password.value
      };

      axios
        .post("http://172.20.10.7:5001/login-user", userData)
        .then(res => {
          setIsLoading(false);
          console.log(res.data);
          if (res.data.status === "ok") {
            Alert.alert("Đăng nhập thành công");
            navigation.navigate('HomeScreen');
            AsyncStorage.setItem('token', res.data.data);
            AsyncStorage.setItem('Loggedin', JSON.stringify(true));
          } else {
            Alert.alert("Đăng nhập thất bại", res.data.error);
          }
        })
        .catch(error => {
          setIsLoading(false);
          console.error(error);
          Alert.alert("Lỗi", "Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.");
        });
    }
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome back.</Header>
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
      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPasswordScreen')}>
          <Text style={styles.forgot}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      ) : (
        <TouchableOpacity onPress={handleSubmit}>
          <Button mode="contained">Đăng nhập</Button>
        </TouchableOpacity>
      )}
      <View style={styles.row}>
        <Text>Chưa có tài khoản? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Đăng kí</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginServiceContainer}>
        <Text style={styles.loginServiceText}> Hoặc đăng nhập bằng</Text>
      </View>
      <View style={styles.loginService}>
        <LoginService />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  loginServiceContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  loginServiceText: {
    marginBottom: 20,
  },
  loginService: {
    height: 15,
  },
});