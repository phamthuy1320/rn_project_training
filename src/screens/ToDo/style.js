import { fromPairs } from "lodash";
import { Dimensions, StyleSheet } from 'react-native'

const {width, height} = Dimensions.get('screen')
const styles = StyleSheet.create({
    iconBack: {
        width: 20,
        height: 20,
        
    },
    viewHeader: {
        flexDirection:'row',
        margin: 20,
        marginRight: 20,
      },
    itemTask: {
        backgroundColor: 'red',
        width: width - 40,
        height: height / 15,
        marginLeft: 20,
        borderRadius: 5

    },
      container: {
        backgroundColor: '#f4f4f4',
        flex: 1,
      },
      rowFront: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 60,
        margin: 5,
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
    
    
      rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        margin: 5,
        marginBottom: 15,
        borderRadius: 5,
      },
      backRightBtn: {
        alignItems: 'flex-end',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        paddingRight: 17,
      },
    
      backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
        width: width - 10,
       borderRadius: 5,
      },
      trash: {
        height: 25,
        width: 25,
        marginRight: 7    ,
      },
      text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#666',
        margin: 5,
      },
    

});

export default styles;