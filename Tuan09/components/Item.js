import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView} from "react-native"
import {useNavigation} from "@react-navigation/native"

const Item = ({imgPath, name, price}) =>{
  const navigation = useNavigation();
    return(
        <TouchableOpacity style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F7BA8326",
            borderRadius: 10,
            margin: 7,
            width: 130,
            height: 150
        }}
        onPress={()=>{
          let item = {
            imgPath: imgPath,
            name: name,
            price: price
          }
          navigation.navigate("BikeDetail", {item: {item}})}}
        >
            <Image style={{
                position: "absolute",
                top: 5,
                left: 15
            }} source={require("../assets/images/heart.png")}/>
            <Image style={{
                marginTop: 20,
                height: 65,
                width: 65
                
            }} source = {imgPath}/>
            <Text style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#00000099"
            }}>{name}</Text>
            <Text style={{
                  fontSize: 16,
                  fontWeight: 400,
            }}>
                <Image source={require("../assets/images/$.png")}/>
                {price}
            </Text>
        </TouchableOpacity>
    )
}
export default Item