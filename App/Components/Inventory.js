import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Inventory({ navigation }) {  
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder='Search'
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.languageButton} onPress={() => { navigation.navigate("EnglishLoginPage") }}>
          <Text style={{ color: "white" }}>Search</Text>
        </TouchableOpacity>
      </View>

     
      <View style={styles.mainContent}>
        <Text style={styles.title}>Welcome to the Inventory</Text>
     
      </View>

     
      <View style={styles.nev}>
        
            <TouchableOpacity onPress={()=>{navigation.navigate("Dashboard")}}>
            <View style={styles.navItem}>
            <Image source={require("../Assets/Image/home-icon.png")} style={styles.icon} />
          <Text style={styles.navText}>Dashboard</Text>
          </View>
            </TouchableOpacity>
          
        <TouchableOpacity onPress={()=>{navigation.navigate("AddProduct")}}>
        <View style={styles.navItem}>
          <Image source={require("../Assets/Image/add-icon.png")} style={styles.icon} />
          <Text style={styles.navText}>Add Product</Text>
        </View>
        </TouchableOpacity>
       

       <TouchableOpacity onPress={()=>{navigation.navigate('Inventory')}}>
       <View style={styles.navItem}>
          <Image source={require("../Assets/Image/inventory-icon.png")} style={styles.icon} />
          <Text style={styles.navText}>Inventory</Text>
        </View>

       </TouchableOpacity>
        

        <TouchableOpacity onPress={()=>{navigation.navigate("Profile")}}>

        <View style={styles.navItem}>
          <Image source={require("../Assets/Image/profile-icon.png")} style={styles.icon} />
          <Text style={styles.navText}>Profile</Text>
        </View>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  searchContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    backgroundColor:"#4CAF50",
    
  },
  searchInput: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    borderRadius: 25,
    backgroundColor: "lightgray",
    width: 250,
  },
  languageButton: {
    backgroundColor: "gray",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
  },
  nev: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10,
    position: 'absolute', // Changed to absolute to fix it at the bottom
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 25,
  },
  navText: {
    color: "black",
  },
  mainContent: {
    flex: 1, // Ensure the main content takes the remaining space
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
