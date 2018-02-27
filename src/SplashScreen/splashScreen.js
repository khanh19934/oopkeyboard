import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './splashScreenStyle';
export default class SplashScreen extends Component {
    static navigationOptions = {header: null };
    componentDidMount = () => {
      let timeout =setTimeout(()=>{
        this.props.navigation.navigate('SignIn')
      },1500);
    }
    componentWillUnmount = () => {
        clearTimeout(timeout);
    }
    
    render() {
        return (
        <View style={styles.container}>
            <Image source={require('../asset/logo1.png')} resizeMode="contain" style={styles.logo}/>
        </View>
        )
    }
}

