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
        width:Dimensions.get('window').width * 0.8,
        marginBottom:Dimensions.get('window').height * 0.13,
        alignItems:'center',
        alignSelf:'center'
    },
    formSection:{
        width:"90%",
        flexDirection:'row',
        marginRight:15,
        marginLeft:-75
    },
    logo:{
        width:Dimensions.get('window').width * 0.15,
        height:Dimensions.get('window').height * 0.1,
        marginTop:-25,
        marginBottom:20
    },
    phoneInputSection:{
        flexDirection:'row',
        width:'100%',
        height:Dimensions.get('window').height * 0.1,
        marginTop:10,
        alignItems:'center',
        paddingLeft:10
    },
    selectNationalPhoneCode:{
        marginLeft:15,
        height:'60%',
        width:'20%'
    },
    formPhoneNumber:{
        marginRight:10,
        width:'70%',
        height:'62%',
        justifyContent:'center',
        alignItems:'center'
    },
    formInput:{
        width:'90%',
        height:'86%',
        marginTop:7
    },
    inputStyle:{
        fontSize:20,
        paddingBottom:5,
        fontWeight:'bold',
        color:'#000'
    }
    
})