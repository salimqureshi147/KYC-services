import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const OnBoardingScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(async () => {
      navigation.replace('Login');
    }, 3000);
  }, []);
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/splashscreen.png')}></ImageBackground>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({});
