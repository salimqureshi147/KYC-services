import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const Width = Dimensions.get('window').width;
const ChooseVarification = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
      <View style={styles.mainView}>
        <Text style={styles.h1}>Choose The Verification</Text>
        <Text style={{color: '#000'}}>
          Select any verification to start the demo
        </Text>
        <TouchableOpacity style={[styles.cards, {marginTop: 15}]}>
          <Image
            style={{height: 30, width: 30}}
            source={require('../assets/Vector1.png')}
          />
          <View style={{}}>
            <Text style={{fontSize: 12, fontWeight: '700', color: '#2D2D2D'}}>
              Face Verify
            </Text>
            <Text style={{fontSize: 10, fontWeight: '500'}}>
              Verify your liveliness with a selfie
            </Text>
          </View>
          <Image
            style={{height: 20, width: 20}}
            source={require('../assets/arrow.png')}
            resizeMode={'contain'}
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.cards, {marginVertical: 15}]}>
          <Image
            style={{height: 30, width: 30}}
            source={require('../assets/Vector2.png')}
          />
          <View style={{}}>
            <Text style={{fontSize: 12, fontWeight: '700', color: '#2D2D2D'}}>
              Document Verify
            </Text>
            <Text style={{fontSize: 10}}>
              Verify the Authenticity of your ID
            </Text>
          </View>
          <Image
            style={{height: 20, width: 20}}
            source={require('../assets/arrow.png')}
            resizeMode={'contain'}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cards}>
          <Image
            style={{height: 30, width: 30}}
            source={require('../assets/Vector3.png')}
          />
          <View style={{}}>
            <Text style={{fontSize: 12, fontWeight: '700', color: '#2D2D2D'}}>
              Face & Document
            </Text>
            <Text style={{fontSize: 10}}>
              Verify your your Identity wit a Selfie & ID
            </Text>
          </View>
          <Image
            style={{height: 20, width: 20}}
            source={require('../assets/arrow.png')}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChooseVarification;

const styles = StyleSheet.create({
  mainView: {
    flex: 0.7,
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: Width,
    padding: 20,
  },
  h1: {
    fontWeight: '700',
    fontSize: 20,
    color: '#000',
  },
  cards: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#D3F36B',
  },
});
