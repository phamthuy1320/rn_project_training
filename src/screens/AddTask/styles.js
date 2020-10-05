import mainStyle from '../MainScreen/styles';

const styles = {...mainStyle,...{
    headerContent:{
        margin:20
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:20,
        color:'#000'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent:'center',
        alignItems:'center'
    },
    icon:{
        // height:50,
        // aspectRatio:1/1,
        padding:10,
        borderRadius:25,
        backgroundColor:'#081e87'
    },
    detailContainer:{
      justifyContent:'space-between' ,
    },
    setTime:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:20,
    },
    detailItem:{
        marginHorizontal:20,
        marginBottom:20,
        color:'#b2b1b1',
        fontSize:22,
        backgroundColor:'#fff9ec'
    },
    _2column:{
        width:'40%'
    },
    cateItemContainer:{
        marginHorizontal:10,
        borderRadius:25,
    },
    cateItem:{
        paddingHorizontal:20,
        paddingVertical:10,
        color:'#fff',
        textAlign:'center'
    },
    cateSeparator:{
        margin:5,
    },
    flatlistContent:{
        marginVertical:10,
        marginHorizontal:15,
    }
    
}}
export default styles;
