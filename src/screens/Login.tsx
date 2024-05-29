import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../theme/theme';
import axios from 'axios';

const LoginScreen = (props: any) => {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const onSubmit = async () => {
    if (!email.trim()) {
      setErrorPassword('Please enter your email');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorPassword('Please enter a valid email');
      return;
    }

    if (!password.trim()) {
      setErrorPassword('Please enter your password');
      return;
    }

    if (password.length < 6) {
      setErrorPassword('Password must be at least 6 characters long');
      return;
    }

    let formData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.get(
        'https://65d332d7522627d501084234.mockapi.io/Accounts',
      );
      const userData = response.data.find(
        (user: any) => user.email === email && user.password === password,
      );

      if (userData) {
        navigation.navigate('TabNavigator');
        Alert.alert('Login Success.');
      } else {
        Alert.alert('Incorrect email or password. Please try again.');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('An error occurred. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/app_images/logo.png')}
        style={styles.containerImg}
      />
      <Text style={styles.welcomeText}>Welcome to lungo !!</Text>
      <Text style={styles.loginText}>Login to continue</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email Address"
        placeholderTextColor={COLORS.primaryWhiteHex}
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.textInput, {marginTop: 20}]}
        placeholder="Password"
        placeholderTextColor={COLORS.primaryWhiteHex}
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.buttonLogin} onPress={onSubmit}>
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLoginWithGoogle}>
        <Image
          style={styles.ImageSocial}
          source={{
            uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
          }}
        />
        <Text style={styles.textLoginWithGoogle}>Sign in with Google</Text>
      </TouchableOpacity>
      <View style={styles.containerRegisterAndReset}>
        <Text style={styles.textBefore}>Don't have account? click </Text>
        <Text
          style={styles.textAfter}
          onPress={() => navigation.navigate('Register')}>
          Register
        </Text>
      </View>
      <View style={[styles.containerRegisterAndReset, {marginTop: 20}]}>
        <Text style={styles.textBefore}>You have an account? click </Text>
        <Text style={styles.textAfter}>Reset</Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
    flexDirection: 'column',
    padding: 10,
  },
  containerImg: {
    width: 142,
    height: 142,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: 50,
  },
  welcomeText: {
    fontFamily: 'Popins',
    color: 'white',
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 16,
    marginTop: 10,
  },
  loginText: {
    fontFamily: 'Popins',
    color: 'grey',
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 12,
    marginTop: 20,
  },
  textInput: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1d212a',
    marginTop: 40,
    color: 'white',
    paddingLeft: 14,
  },
  buttonLogin: {
    height: 57,
    backgroundColor: '#e46d37',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  signInText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  buttonLoginWithGoogle: {
    height: 57,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    flexDirection: 'row',
  },
  ImageSocial: {
    width: 30,
    height: 30,
    marginEnd: 10,
  },
  textLoginWithGoogle: {
    color: 'black',
    fontWeight: 'bold',
  },
  containerRegisterAndReset: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
  },
  textBefore: {
    color: 'grey',
  },
  textAfter: {
    color: '#D17842',
  },
});
