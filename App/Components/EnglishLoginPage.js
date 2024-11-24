import { View, Text ,Image, TextInput,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

export default function EnglishLoginPage({navigation}) {
  return (
    <View>
      <View style={{display:"flex", flexDirection:"column", alignItems:"center"}}> 
        <Image source={require("../Assets/Image/login-page-iml.png")} style={{height:100,width:100,marginTop:70}} ></Image>
        <Text style={{fontSize:30, display:"flex", flexDirection:"column",marginTop:10}}>Login/SignUp</Text>
      </View>
      <View style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <View>
            <Text style={{marginTop:20}}> Enter Username</Text>
        <TextInput placeholder='UserName' style={styles.inputForn}/ >
        <Text>Enter Password</Text>
        <TextInput placeholder='Password' style={styles.inputForn}/ >
        <TouchableOpacity style={styles.submitButton} onPress={()=>{navigation.navigate("Dashboard")}} ><Text style={{color:"white"}}>Submit</Text></TouchableOpacity>
        </View>
        

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    inputForn:{
        marginTop:10,
        marginBottom:10,
        width:300,
        backgroundColor:"lightgray",
        paddingLeft:40,
        paddingRight:40,
        paddingTop:10,
        paddingBottom:10,
        borderStyle:"solid",
        borderColor:"black",
        borderWidth:2,
        borderRadius:8,

    },

    submitButton:{
        backgroundColor:"black",
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        borderRadius:10,
        marginBottom:10,
        marginLeft:0,
        width:100
    
    
      }
})