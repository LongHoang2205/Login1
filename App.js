import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import styles from './AppStyle';
import {RNTextInput,RNButton,RNButtonIcon,RNButtonOpacity} from './components';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
          <Text style={styles.text}>Sign In</Text>
      </View>
      <View>
        <RNTextInput placeholder={'username and email'}/>
        <RNTextInput placeholder={'password'}/>
      </View>
      <View>
      <RNButton />
      </View>
      <View style={styles.viewOther}>
        <Text style={styles.other}>
          Or login with
        </Text>
      </View>
      <View style={styles.icon}>
      <RNButtonIcon hinh={require('./images/fb.png')}/>
        <RNButtonIcon hinh={require('./images/gg.png')}/>
      </View>
      <View style={styles.opacity}>
          <RNButtonOpacity nameOfButton={'Sign Up' } />
      </View>
    </SafeAreaView>
  );
}

