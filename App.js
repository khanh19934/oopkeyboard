import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/Home/home';
import SplashScreen from './src/SplashScreen/splashScreen';
import SignIn from './src/SignIn/signIn';
import SignUp from './src/SignUp/signUp'
const RootStack = StackNavigator({
  SplashScreen:{
    screen:SplashScreen
  },
  Home: {
    screen: HomeScreen,
  },
  SignIn:{
    screen:SignIn
  },
  SignUp:{
    screen:SignUp
  }
});
export default class App extends Component {
  render() {
    return (
      <RootStack/>
    )
  }
}