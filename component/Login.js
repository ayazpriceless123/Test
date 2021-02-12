/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar, Image, StyleSheet} from 'react-native';
import {Container, Body, Title, Button, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const App = () => {
  let navigation = useNavigation();

  return (
    <Container
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        height: '100%',
      }}>
      <StatusBar barStyle="dark-content" />
      <View>
        <Image source={require('./assets/1.png')} />
      </View>
      <Button
        style={[styles.btns, {marginTop: '5%'}]}
        onPressIn={() => navigation.navigate('Adminlogin')}
        rounded>
        <Text style={styles.btnTxt}>AdminLogin</Text>
      </Button>
      <Button
        style={[styles.btns, {marginTop: '5%'}]}
        onPressIn={() => navigation.navigate('Memberlogin')}
        rounded>
        <Text style={styles.btnTxt}>MemberLogin</Text>
      </Button>
    
      <Title style={{fontSize: 20, color: 'lightgray', marginTop: '5%'}}>
        From{' '}
      </Title>
      <Title
        style={{fontSize: 25, color: 'lightgray', textTransform: 'uppercase'}}>
        editor systima{' '}
      </Title>
    </Container>
  );
};

const styles = StyleSheet.create({
  btns: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    marginTop: '4%',
  },
  btnTxt:{
    width: '100%', textAlign: 'center'
  }
});

export default App;
