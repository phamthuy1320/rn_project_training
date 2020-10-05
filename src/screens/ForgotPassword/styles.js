import styles1 from '../LoginScreen/styles';

const styles = {...styles1,...{
    alert:{
        minHeight:100,
        margin:20,
        elevation:4,
        backgroundColor:'#f8f8f8',
        justifyContent:'center'
    },
    info:{
        textAlign:'center'
    },
    verifyInfo:{
        textAlign:'center'
    },
    verify:{
        // flexDirection:'row',
        marginHorizontal:10,
        width:'40%',
        alignSelf:'center'
    },
    clear:{
        textDecorationLine:'underline',
        color:'#8f83d8',
        alignSelf:'flex-end',
        marginHorizontal:20
    }
}}

export default styles;
