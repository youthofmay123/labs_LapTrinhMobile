import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView} from "react-native"
export default function BikeDetail({navigation, route}){
  const { item } = route.params.item
 return(
   <ScrollView>
    <View style={{
      flex: 1,
      margin: 15

    }}> 
      <View style={{
        //  flex: 1,
         backgroundColor: "#E941411A",
         justifyContent: "center",
         alignItems: "center",
         borderRadius: 10,
         height: 300
      }}>
         <Image source={item.imgPath} style={{height: 200, width: 210}}/>
      </View>
      <View style={{
         flex: 1,
        
      }}>
         <View style={{
         }}>
            <Text style={{
               fontSize: 20,
               fontWeight: 500,
               paddingVertical: 12
            }}>{item.name}</Text>

            <Text style={{
               fontSize: 16,
               color: "#00000096",
               fontWeight: 600
            }}>15% OFF I {item.price}$ <Text style={{
               color: "#000",
               textDecorationLine: "line-through",
               paddingLeft: 30
            }}>{item.price *1.5}$</Text></Text>
         </View>
         {/* Description */}
         <View style={{
         }}>
            <Text style={{
               fontSize: 20,
               fontWeight: 500,
               marginVertical: 20
            }}>Description</Text>
            <Text style={{
               fontSize: 19,
               fontWeight: 400,
               color: "#00000091",
               marginVertical: 20

            }}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
         </View>
         {/* Cart button */}
         <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 30
         }}>
            <Image source={require("../assets/images/akar-icons_heart.png")}/>
            <TouchableOpacity style={{
               backgroundColor: "#E94141",
               height: 60,
               borderRadius: 30,
               justifyContent: "center",
               width: "80%"
            }}>
               <Text style={{
                  color: "#fff",
                  fontSize: 16,
                  textAlign: "center"
               }}>Add to card</Text>
            </TouchableOpacity>
         </View>
      </View>
    </View>
    </ScrollView>
 )
}

