import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwsome from '@expo/vector-icons/FontAwesome'
import Category from './components/Category'
import Popular from './components/Popular'
import Recommended from './components/Recommended'
import ItemFooter from './components/ItemFooter'
import {useState, useEffect} from 'react'

export default function App() {

  const location = [
    {
      image: require("./assets/download (8).png")
    },
    {
      image: require("./assets/download (9).png")
    },
    {
      image: require("./assets/download (10).png")
    },
    {
      image: require("./assets/download (9).png")
    },
    {
      image: require("./assets/download (8).png")
    },
    {
      image: require("./assets/download (10).png")
    },
  ]

  const category = [
    {
      name: "Resort",
      image: require("./assets/download (4).png"),
    },
     {
      name: "Homestay",
      image: require("./assets/download (5).png"),
    },
     {
      name: "Hotel",
      image: require("./assets/download (6).png"),
    },
     {
      name: "Lodge",
      image: require("./assets/download (7).png"),
    },
     {
      name: "Vila",
      image: require("./assets/download (6).png"),
    },
     {
      name: "Apartment",
      image: require("./assets/download (5).png"),
    },
     {
      name: "Hostel",
      image: require("./assets/download (4).png"),
    },
     {
      name: "See all",
      image: require("./assets/download (7).png"),
    },
  ]

  const [dataCate, setDataCate] = useState(null);
  const getData = async ()=>{
    try{
      const data = await fetch('https://671624ef33bc2bfe40bc9b64.mockapi.io/category').json();
      setDataCate(data);
    }
    catch(error)
    {
      console.log(error);
    }
  }
  useEffect(
    ()=>{
      getData()
    }
  )
  return (
    <SafeAreaView style={{height: '100%', padding: 20}}>
      <View style={{height: '22%', width: '100%', justifyContent: 'center', backgroundColor: 'blue'}}>
          <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', padding: 10}}>
              <Image source={require("./assets/download (1).png")} style={{width: 20, height: 20, backgroundColor: 'purple', borderRadius: 100, marginRight: 10}}/>
              <View style={{width: '90%'}}>
                <TextInput style={{borderWidth: 1, borderRadius: 10, borderColor: 'gray', width: '100%', height: 28, color: 'gray', padding: 15, paddingRight: 30, position: 'relative', backgroundColor: 'white'}} placeholder= 'Search here...'/>
              <AntDesign name="search1" size={20} color="gray" style={{position: 'absolute', right: 10, top: 5}}/>
              </View>
              
          </View>
          <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', padding: 10}}>
              <Image source={require("./assets/download (2).png")} style={{width: 20, height: 20, backgroundColor: 'purple', borderRadius: 100, marginRight: 10}}/>
              <View style={{width: '90%'}}>
               <View>
                <Text style={{fontSize: 12, fontWeight: 'bold', color: 'white'}}>Welcome!</Text>
                <Text style={{fontSize: 12, color: 'white'}}>Donna strope</Text>
               </View>
              <Image  source={require("./assets/download (3).png")} style={{position: 'absolute', right: 10, top: 5, width: 18, height: 18, backgroundColor: 'white', borderRadius: 100}}/>
              </View>
          </View>
      </View>
      <ScrollView style={{padding: 20, height: '63%', maxHeight: 500}}>
      <View>
            <View>
              <Text style={{fontWeight: 'bold'}}>Category</Text>
              <FontAwsome name="list-alt" size={20} color="black" style={{position: 'absolute', right: 10, top: 5}}/>
            </View>
            <View style={{height: 160, marginTop: 10, flexDirection: 'row', flexWrap: 'wrap'}}>
              {category.map((item)=>(<Category image={item.image} title={item.name}/>))}

              
            </View>
             <View>
              <Text style={{fontWeight: 'bold'}}>Popular Destination</Text>
              <FontAwsome name="list-alt" size={20} color="black" style={{position: 'absolute', right: 10, top: 5}}/>
            </View>
            <View style={{height: 150, marginTop: 10, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'}}>
              {location.map((item)=>(<Popular image={item.image}/>))}
             
            </View>
             <View>
              <Text style={{fontWeight: 'bold'}}>Recommended</Text>
              <FontAwsome name="list-alt" size={20} color="black" style={{position: 'absolute', right: 10, top: 5}}/>
            </View>
            <View style={{ height: 160, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Recommended image={require("./assets/download (11).png")}/>
              <Recommended image={require("./assets/download (12).png")}/>
            </View>
          </View>
      </ScrollView>
      <View style={{height: '15%', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'blue'}}>
        <ItemFooter image={require("./assets/download (13).png")} title="Home"/>
        <ItemFooter image={require("./assets/download (14).png")} title="Explore"/>
        <ItemFooter image={require("./assets/download (15).png")} title="Search"/>
        <ItemFooter image={require("./assets/download (16).png")} title="Profile"/>
      </View>
    </SafeAreaView>
  );
}
