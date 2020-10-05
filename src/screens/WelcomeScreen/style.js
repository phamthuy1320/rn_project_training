import { Dimensions, StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated';

const width = Dimensions.get('screen')
const height = Dimensions.get('screen')


const styles = StyleSheet.create ({
    container:{
        flex: 1,
        color: '#FFFFFF'
    },
    image: {
        width: height.height / 2
    },
    txttext: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign:'center'

    },
    txtdiscription: {
        fontSize: 13,
        textAlign:'center'
    },
    btnskip:{

    },
    btnContinue: {
        height: 35,
        backgroundColor: "#F5C59B",
        borderRadius: 25,
        justifyContent:'center',

    },
    txtContinue: {
        color: "white",
        fontSize: 14,
        padding:8

    },
    txtSkip: {
        color: "#C5C5C5",
        textDecorationLine: "underline",
        fontSize: 14,
     
    },
    banner:{
        width: width.width - 20,
        marginLeft: 10,
        height: 500,
    },  
    bottomItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginHorizontal:18,
        alignItems:'flex-end',
        marginBottom:width.width/4

        
    }
    
})
export default styles;