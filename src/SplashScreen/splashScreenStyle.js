import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:'#fff'
    },
    logo:{
        width:Dimensions.get('window').width * 0.4,
        height:Dimensions.get('window').height * 0.25
    }
})