import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './signUpStyle';
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
    clicked:false,
    seconds:60
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
          return;
        }
  }
  _handleRenderKeyboardItem = () => {
    return this.state.numbers.map(row => (
      <View key={String(Math.random())} style={styles.keyBoardRow}>
        {row.map(item => <KeyboardItem key={item.key} data={item} addValue={this._handlePassValueToBox}/>)}
      </View>
    ));
  }
  _handleRenderFormInput = () => {

    let codeLength = [1,1,1,1,1,1];
    let valueHolder = "";
     return codeLength.map((item,index) =>  {
       if( this.state.value[index] !== undefined && this.state.value.length !==0 ){
        return <FormInput key={index} inputStyle={{paddingLeft:10}} containerStyle={styles.formInput} maxLength={1} value={'*'}/>
       }else{
        return <FormInput key={index} inputStyle={{paddingLeft:10}} containerStyle={styles.formInput} maxLength={1} value={''}/>
       }
     })
  }
  _countDown = () => {
    let timer;
    if(this.state.seconds <=0 ){
      clearTimeout(timer);
      this.setState(state => ({
        seconds:60,
        clicked:false
      }))
    }else{
      this.setState(state => ({
        seconds:state.seconds-1,
        clicked:true
      }));
       timer = setTimeout(this._countDown,1000);
    }
    
  }
  _handleChangeNumber = () => {

  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.form}>
            <Text style={{fontSize:20}}>Nhập mã xác nhận</Text>
            <View style={styles.formSection}>
              {this._handleRenderFormInput()}
            </View>
            
          </View>
          <View style={styles.countDownTimeRecode}>
            {this.state.clicked === true ?  <Text style={{color:"gray"}}>Bạn sẽ nhận được mã trong {this.state.seconds} giây</Text>: null}
          </View>
          <View style={styles.option}>
              <TouchableOpacity disabled={this.state.clicked} onPress={this._countDown}><Text style={this.state.clicked ? styles.textStyleDisabled : styles.textStyle}>Nhận lại mã</Text></TouchableOpacity>
              <TouchableOpacity onPress={this._handleChangeNumber}><Text style={styles.textStyle}>Nhập số khác</Text></TouchableOpacity>
          </View>
        <View style={styles.keyboardSection}>
          {this._handleRenderKeyboardItem()}
        </View>
        
      </View>
    )
  }
}







