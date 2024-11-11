import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, ScrollView } from 'react-native';

export default function ItemFooter(props) {
  const {image, title} = props
  return (
    <View style={{justifyContent: 'center', padding: 8, alignItems: 'center'}}>
      <Image style={{width: 20, height: 20}} source={image}/>
      <Text style={{fontSize: 12, color: 'white', marginTop: 10}}>{title}</Text>
    </View>
  )
}