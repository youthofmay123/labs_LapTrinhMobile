
import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import {useState} from 'react'

// or any files within the Snack
export default function LoginScreen({navigation, route}) {

  const [email, setEmail] = useState('')
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../assets/img/banner-note.png")} style={styles.imgBanner} resizeMode="contain"/>
        <Text children={"MANAGE YOUR\nTASK"} style={styles.textName}/>
      </View>
      <View style={styles.containerInput}>
        <Image source={require("../assets/img/ico-email.png")} resizeMode="contain"/>
        <TextInput style={styles.input} placeholder="Enter your name" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>{
        navigation.navigate("task", {email: email})
      }}>
        <Text style={{color: "white"}}>GET STARTED -></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00BDD6",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 15
  },
  input: {
    width: 250,
    height: 30,
    paddingHorizontal: 5
  },
  containerInput:{
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 2
  },
  textName: {
    color: "purple",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10
  },
  imgBanner: {
    width: 200,
    height: 200
  },
  container: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
});
