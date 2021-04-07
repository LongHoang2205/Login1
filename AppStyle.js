import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        borderWidth:0.5,
        borderColor:'#FFFFFF',
        backgroundColor:'#F7F4F4',
    }, 
    head:{
        alignItems:'center',
          justifyContent:"center",
        height:120,
    },
    text:{
        color:'#530054',
        fontWeight:'bold',
        fontSize:30
    },
    viewOther:{
        alignItems:'center',
        textAlign:'center',
        marginBottom:40
    },
    other:{
        color:'#9DA4D0',
        fontSize:16
    },
    icon:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:80
    },
    opacity:{
        alignItems:"center"
    }

});

export default styles