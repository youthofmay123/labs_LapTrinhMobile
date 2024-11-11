import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, ScrollView } from 'react-native';

export default function Category(props) {
  const {image, title} = props
  return (
    <View style={{justifyContent: 'center', padding: 8, alignItems: 'center'}}>
      <Image style={{width: 40, height: 40, backgroundColor: 'purple', borderRadius: 100}} source={image}/>
      <Text style={{overflow: 'hidden', fontSize: 10}}>{title}</Text>
    </View>
  )
}