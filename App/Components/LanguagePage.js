import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import EnglishLoginPage from './EnglishLoginPage';


export default function LanguagePage({ navigation }) {
   
  return (
    <View style={styles.container}>
      <View style={{display:'flex', justifyContent:'center',alignItems:"center" ,  flexDirection:"column", marginTop:200}}> 
        <Text >अपनी भाषा चुनें </Text>
      <Text>(choose your language)</Text>
      </View>
      
      <View style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
        <TouchableOpacity style={styles.languageButton}><Text style={{color:"white"}}>   हिन्दी   </Text></TouchableOpacity>
      <TouchableOpacity style={styles.languageButton} onPress={()=>{navigation.navigate("EnglishLoginPage")}}><Text style={{color:"white"}}>English</Text></TouchableOpacity>
      </View>
      <Image source={require("./../Assets/Image/language-page-img.png")} style={{width:300,height:300 ,marginLeft:50 , marginTop:70}}></Image>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

  languageButton:{
    backgroundColor:"black",
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:20,
    paddingRight:20,
    borderRadius:10,
    marginTop:30,
    marginBottom:10,
    marginLeft:20


  }
});

