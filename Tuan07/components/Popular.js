import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, ScrollView } from 'react-native';

export default function Popular(props) {
  const {image, tile} = props
  return (
    <View style={{justifyContent: 'center', padding: 8}}>
      <Image style={{width: 58, height: 58, borderRadius: 10}} source={image}/>
    </View>
  )
}