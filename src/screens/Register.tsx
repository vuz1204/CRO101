import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import axios from 'axios';
import {COLORS} from '../theme/theme';

const RegisterScreen = (props: any) => {
  const {navigation} = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const onSubmit = () => {
    if (!name.trim()) {
      setErrorPassword('Please enter your name');
      return;
    }

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

    if (password !== retypePassword) {
      setErrorPassword("Passwords don't match");
      return;
    }

    let formData = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post('https://65d332d7522627d501084234.mockapi.io/Accounts', formData)
      .then(response => {
        if (response.data) {
          Alert.alert(`Register Success: ${response.data.email}.`);
          navigation.navigate('Login');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/app_images/logo.png')}
        style={styles.containerImg}
      />
      <Text style={styles.welcomeText}>Welcome to lungo !!</Text>
      <Text style={styles.registerText}>Register to continue</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Name"
        placeholderTextColor={COLORS.primaryWhiteHex}
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor={COLORS.primaryWhiteHex}
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor={COLORS.primaryWhiteHex}
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Re-type password"
        placeholderTextColor={COLORS.primaryWhiteHex}
        onChangeText={text => setRetypePassword(text)}
        value={retypePassword}
        secureTextEntry={true}
      />
      {errorPassword ? (
        <Text style={styles.errorText}>{errorPassword}</Text>
      ) : null}
      <TouchableOpacity style={styles.buttonRegister} onPress={onSubmit}>
        <Text style={styles.signUpText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.containerSignIn}>
        <Text style={styles.textBefore}>Forgot Password? click </Text>
        <Text style={styles.textAfter}>Sign in</Text>
      </View>
    </View>
  );
};

export default RegisterScreen;

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
  registerText: {
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
    borderColor: COLORS.secondaryGreyHex,
    marginTop: 20,
    color: 'white',
    paddingLeft: 14,
  },
  buttonRegister: {
    height: 55,
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  containerSignIn: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  textBefore: {
    color: 'grey',
  },
  textAfter: {
    color: COLORS.primaryOrangeHex,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
