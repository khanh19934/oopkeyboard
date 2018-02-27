import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Image } from 'react-native';
import {Select, Option} from "react-native-chooser";
import styles from './signInStyle';
import {FormInput} from 'react-native-elements';
import KeyboardItem from '../keyboardItem';
export default class LoginCode extends Component {
    static navigationOptions = {header: null };
  state = {
    numbers:[
      [{ key:1},{key:2},{key:3}],
      [{key:4},{key:5},{key:6}],
      [{key:7},{key:8},{key:9}],
      [{key:0},{key:'Back'},{key:'OK'}]
    ],
    value:[],
    selectedNationalCode:' +84'
  }
  componentDidMount = () =>{

  }
  _handlePassValueToBox = (value) => {

        if(value !=="Back" && value !=="OK"){
          this.setState(state => ({
            value:state.value.length <= 5  ? state.value.concat(value) : state.value
          }))
        }else if(value ==="Back"){
          if(this.state.value.length === 0){
            return;
          }
          else{
            this.setState(state => ({
              value:state.value.filter((item,index) => index !== (state.value.length-1))
            }))
          }
        }else{
            this.props.navigation.navigate('SignUp');
        }
  }
  _handleRenderKeyboardItem = () => {
    return this.state.numbers.map(row => (
      <View key={String(Math.random())} style={styles.keyBoardRow}>
        {row.map(item => <KeyboardItem key={item.key} data={item} addValue={this._handlePassValueToBox}/>)}
      </View>
    ));
  }
  _handleSelect = (value,label) => {
      this.setState({selectedNationalCode:value});
  }
  render() {
    return (
      <View style={styles.container}>
          
          <View style={styles.form}>
            <Image source={require('../asset/logo1.png')} resizeMode="contain" style={styles.logo}/>
            <Text>Nhập số điện thoại của bạn</Text>
            <View style={styles.phoneInputSection}>
                <View style={styles.selectNationalPhoneCode}>
                <Select
                onSelect = {this._handleSelect}
                defaultText  = {this.state.selectedNationalCode}
                style = {{width:'100%',borderWidth : 0 ,borderBottomWidth:1}}
                animationType="fade"
                textStyle = {{fontSize:16,fontWeight:'bold'}}
                backdropStyle  = {{backgroundColor:"rgba(192,192,192,0.3)"}}
                optionListStyle = {{}}
                >
                <Option value = "+84">+84 Viet Nam</Option>
                <Option value = "+93">+93 Afghanistan</Option>
                <Option value = "+880">+880 Bangladesh</Option>
                <Option value = "+32 ">+32 Belgium</Option>
                <Option value = "+86">+86 China</Option>
                <Option value = "+65">+65 Singapore</Option>
                <Option value = "+66 ">+66  ThaiLand</Option>
            </Select>
                </View>
                <View style={styles.formPhoneNumber}>
                    <FormInput 
                    containerStyle={styles.formInput}
                    inputStyle={styles.inputStyle}
                    maxLength={10}
                    autoFocus={true}
                    />
                </View>
            </View>
          </View>
        <View style={styles.keyboardSection}>
          {this._handleRenderKeyboardItem()}
        </View>
        
      </View>
    )
  }
}







