import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useRef, useState} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import {buttonCard} from '../utilis/styles';
const Width = Dimensions.get('window').width;
const Login = ({navigation}) => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null);
  return (
    <View style={{flex: 1, backgroundColor: '#D3F36B'}}>
      <StatusBar backgroundColor={'#24282C'} />

      <Image
        style={styles.pic1}
        resizeMode={'contain'}
        source={require('../assets/login.png')}
      />
      <View style={{width: '90%', alignSelf: 'center'}}>
        <Text
          style={{
            color: '#24282C',
            fontWeight: '700',
            fontSize: 24,
          }}>
          Sign in to Verify
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 14,
            width: 250,
            color: '#000',
            marginVertical: 10,
          }}>
          Experience The User Journey similar to Our SDK'S Flow
        </Text>
        <TextInput
          style={styles.inputText}
          placeholder={'Business Email'}
          // placeholderTextColor={'#2D2D2D'}
        />
        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="DM"
          layout="first"
          onChangeText={text => {
            setValue(text);
          }}
          onChangeFormattedText={text => {
            setFormattedValue(text);
          }}
          withDarkTheme
          withShadow
          autoFocus
          containerStyle={{
            height: 50,
            width: Dimensions.get('window').width - 40,
            borderColor: '#000',
            borderRadius: 6,
            backgroundColor: '#2D2D2D',
            marginBottom: 20,
          }}
          textInputStyle={{
            height: 40,
            alignSelf: 'center',
            fontWeight: '500',
          }}
          codeTextStyle={{
            height: 25,
            color: '#000',
          }}
          countryPickerButtonStyle={{}}
          textContainerStyle={{
            borderWidth: 1,
            borderRadius: 6,
            backgroundColor: '#D3F36B',
          }}
        />

        <TouchableOpacity
          style={buttonCard}
          onPress={() => navigation.navigate('ChooseVarification')}>
          <Text style={{color: '#fff', fontWeight: '700'}}>Login</Text>
        </TouchableOpacity>

        <View
          style={{
            height: 2,
            width: Width - 40,
            borderWidth: 1,
            marginVertical: 20,
            borderColor: '#fff',
          }}>
          <Text style={styles.orText}>OR</Text>
        </View>
        <TouchableOpacity style={buttonCard}>
          <Text style={{color: '#fff', fontWeight: '700'}}>
            Continue As Guest
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  pic1: {
    height: '40%',
    width: '80%',
    alignSelf: 'center',
  },
  inputText: {
    height: 50,
    paddingLeft: 15,
    borderRadius: 6,
    width: Width - 40,
    borderWidth: 1,
    marginVertical: 10,
  },
  orText: {
    color: '#000',
    height: 20,
    alignSelf: 'center',
    fontSize: 18,
    bottom: 13,
    overflow: 'hidden',
    textAlign: 'center',
    fontWeight: '700',
    backgroundColor: '#D3F36B',
    width: 30,
  },
});
