import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Logout = ({navigation}) => {
    const isMove=()=>{
       
            navigation.navigate("start");
    }
  return (
   <>
        <View style={styles.containerText}>
            <Text style={styles.TextStyle}>Are You Sure ?</Text>
        </View>
        <View style={styles.container}>
              <TouchableOpacity style={styles.btnLogin} onPress={()=>isMove()}>
                  <Text style={styles.btnLoginText}>Logout</Text>
              </TouchableOpacity>
        </View>
    </>
  )
}

export default Logout

const styles = StyleSheet.create({
    containerText:{
        textAlign:"center",      
        marginBottom:10,
        marginTop:10
    },  
    TextStyle:{
        color:"#11998e",
        fontSize:20,
    },
    container:{
        width:"100%",
        // height:"100%",
        display:"flex",
        // flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:15
    },
    loginText:{
        // width:"100%",
        fontSize:25,
        letterSpacing:1,
        color:"#11998e",
        fontWeight:"bold",
        marginTop:10
    },
    btnLogin:{
        marginVertical:15,
        backgroundColor:"#11998e",
        width:200,
        padding:7,
        borderRadius:5,
        textAlign:"center"
    },
    btnLoginText:{
        fontSize:17,
        color:"white",
        letterSpacing:1,
        textTransform:"uppercase",
        textAlign:"center"
    },
})