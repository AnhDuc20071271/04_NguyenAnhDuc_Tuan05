import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button,Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}> Login</View>
      <View style={styles.view2}>
        <TextInput
          placeholder="Name"
          style={{ fontSize: "20px", fontWeight: "600" }}
        ></TextInput>
        <Image source={require("./assets/user.png")} 
        style={[styles.Image1, { width: 32, height: 32 ,}]}></Image>
      </View>
      <View style={styles.view3}>
        <TextInput
          placeholder="Password"
          style={{ fontSize: "20px", fontWeight: "600" }}
        ></TextInput>
        <Image source={require("./assets/lock.png")} style={[styles.Image2, { width: 32, height: 32 ,}]}></Image>
        
      </View>
      <View style={styles.view4}>
        <Button title="Login" color="black"></Button>
      </View>
      <View style={styles.view5}>Forgot your password</View>
    <View style={styles.view6}>
    <Image source={require("./assets/eye.png")} style={[styles.Image2, { width: 32, height: 32 ,}]}></Image>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#EEAD0E",
    
  },
  view1: {
    fontWeight: "900",
    fontSize: "30px",
    marginTop: 150,
    marginLeft: 30,
  },
  view2: {
    width: "80%",
    height: "7%",
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    marginTop: 50,
    marginLeft: 50,
    paddingLeft:2,
    
  },
  view3: {
    width: "80%",
    height: "7%",
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: "row-reverse",
    justifyContent:"space-around",
    marginTop: 20,
    marginLeft: 50,
    paddingLeft: 2,
  },

  view4: {
    width: "90%",
    height: "5%",
    marginTop: 20,
    marginLeft: 20,
  },
  view5:{
    marginTop: 20,
    fontWeight: "900",
    fontSize: "30px",
    justifyContent:"center",
    alignItems:"center",
  },
  view6:{
    marginTop: -145,
    flexDirection:"row-reverse",
    paddingRight: 30,
  }
});
