import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, ScrollView } from 'react-native';

export default function Recommended(props) {
  const {image} = props
  return (
    <View style={{justifyContent: 'center', padding: 2}}>
      <Image style={{width: 110, height: 110, borderRadius: 10}} source={image}/>
    </View>
  )
}