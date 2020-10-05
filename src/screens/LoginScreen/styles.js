import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
    },
    title:{
        textAlign:'center',
        fontSize:18,
        color:'#4bbcfe'
    },
    inputContainer:{
        margin:20,
        justifyContent:'center',
        flex:1,
    },
    buttonContainer:{
        margin:20,
        justifyContent:'space-between',
        flex:1,
    },
    textButton:{
        textAlign:'center',
        color:'#F5C59B',
    },
    imageContainer:{
        alignSelf:'center',
        justifyContent:'center',
        flex:1,
        width:'100%'
    },
    image:{
        height:200,
        aspectRatio:812/375,
        resizeMode:'contain',
        alignSelf:'center'
    },
    textButton1:{
        textAlign:'center'
    },
    social:{
        flexDirection:'row',
        justifyContent:"center"
    },
    socialimg:{
        height:30,
        aspectRatio:1/1
    },
    clear:{
        textDecorationLine:'underline',
        color:'#8f83d8',
        alignSelf:'flex-end',
        marginHorizontal:20
    }
})

export default styles;