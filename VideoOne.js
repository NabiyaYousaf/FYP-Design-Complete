import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Video} from 'expo-av';
import React from 'react'

const VideoOne = () => {
  const navigation=useNavigation();
  const isQuiz=()=>{
    navigation.navigate('quiz');
  }
  return (
    <View style={styles.container}>
    
      <Video
        style={{width:'100%',height:300}}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
      <View style={styles.quizView}>
              <TouchableOpacity style={styles.btnLogin} onPress={()=>isQuiz()}>
                  <Text style={styles.btnLoginText}>Attempt Quiz</Text>
              </TouchableOpacity>
          </View>
    </View>
  )
}

export default VideoOne

const styles = StyleSheet.create({
  mainContainer:{
    width:"100%",
    height:"100%",
    display:"flex",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff",
    // marginTop:200
  },
  btnLogin:{
    marginVertical:15,
    backgroundColor:"#11998e",
    width:200,
    padding:7,
    borderRadius:5,
    textAlign:"center",
},
btnLoginText:{
    fontSize:17,
    color:"white",
    letterSpacing:1,
    textTransform:"uppercase",
    textAlign:"center"
},
quizView:{
  width:'100%',
  alignItems:"center",
}
})

