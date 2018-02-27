import {StyleSheet,Dimensions} from 'react-native';
export default StyleSheet.create({
    keyboardSection:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height * 0.5
    },
    container:{
        flex:1,
        justifyContent:'flex-end',
        backgroundColor:'#fff'
    },
    keyBoardRow:{
        height:'21%',
        width:'100%',
        marginBottom:10,
        flexDirection:'row'
    },
    form:{
        height:Dimensions.get('window').height * 0.3,
        width:Dimensions.get('window').width * 0.6,
        marginBottom:-50,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    formInput:{
        width:'16%',
        marginLeft:0
    },
    formSection:{
        width:"90%",
        flexDirection:'row',
        marginRight:15,
        marginLeft:-75
    },
    option:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:10,
        marginRight:10,
        paddingBottom:10,
        height:Dimensions.get('window').height * 0.05,
    },
    textStyle:{
        fontSize:18,
        color:"#0375B4"
    },
    textStyleDisabled:{
        fontSize:18,
        color:"#a8a8a8"
    },
    countDownTimeRecode:{
        height:Dimensions.get('window').height * 0.05,
        marginBottom:90,
        justifyContent:'center',
        alignItems:'center'
    }
    
})