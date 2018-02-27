import React, { Component } from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './keyboardItemStyle';
export default class KeyboardItem extends Component {
  _hanldeRender=() => {
      switch(this.props.data.key){
          case "Back":
          return <Icon name="ios-backspace-outline" size={30}/>;
          default:
          return <Text style={styles.textStyle}> {this.props.data.key} </Text>;
      }
  }
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.addValue(this.props.data.key)}>
        {this._hanldeRender()}
      </TouchableOpacity>
    )
  }
}