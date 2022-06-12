import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'


export default function Quiz({navigation}) {
    const[questions,setQuestions]=useState();
    const[qes,setQes]=useState(0);
    const[isLoading,setIsLoading]=useState(false);
    const getQuiz=async()=>{
        setIsLoading(true);
        const url='https://opentdb.com/api.php?amount=10&type=multiple';
        const response=await fetch(url);
        const data=await response.json();
        setQuestions(data.results)
        setIsLoading(false)
    }
    useEffect(()=>{
        getQuiz();
    },[]);

    const handleNextPress=()=>{
        setQes(qes+1);
    }
    const handleNextHome=()=>{
        navigation.navigate('student');
      }
  return (
    <View style={styles.container}>
    
     { isLoading ? 
      <Text style={styles.textStyle}>Loading...</Text> : 
     questions && 
        <View style={styles.parent}>
     <View style={styles.top}>
          <Text style={styles.question}>Q: {questions[qes].question}</Text>
      </View>
      <View style={styles.options}>
          <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>Option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>Option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>Option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>Option 1</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
          {/* <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity> */}
         {qes !=9 &&<TouchableOpacity style={styles.button} onPress={handleNextPress}>
              <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>}
          {qes ===9 &&<TouchableOpacity style={styles.button} onPress={handleNextHome}>
              <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>}
       </View>
      </View>
      
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:12,
        height:"100%"
    },
    top:{
        marginVertical:16,
        
    },
    options:{
        marginVertical:16,
        flex:1
    },
    bottom:{
        marginBottom:12,
        paddingVertical:16,
        justifyContent:"space-between",
        flexDirection:"row"
    },
    button:{
        backgroundColor:"#11998e",
        padding:12,
        paddingHorizontal:16,
        borderRadius:6,
        alignItems:"center",
        marginBottom:30
    },
    buttonText:{
        fontSize:18,
        fontWeight:"600",
        color:"white"
    },
    question:{
        fontSize:28
    },
    option:{
        fontSize:18,
        fontWeight:"500",
        color:"white"
    },
    optionButton:{
        paddingVertical:12,
        marginVertical:6,
        backgroundColor:"#11998e",
        paddingHorizontal:12,
        borderRadius:6,
    },
    parent:{
        height:"100%" 
    },
    textStyle:{
        display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontSize:28,fontWeight:"bold",
        color:"#11998e"
    }
})