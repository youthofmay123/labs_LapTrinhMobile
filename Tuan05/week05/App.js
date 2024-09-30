import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MainGUI = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image
          style={{ width: 270, height: 290, padding: 5 }}
          source={require('./assets/vs_blue.png')}
        />
      </View>
      <View style={{ padding: 20 }}>
        <Text>Điện thoại vsmartJoy - Hàng chính hãng</Text>
        <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
          <MaterialIcons name="star" size={24} color="yellow" />
          <MaterialIcons name="star" size={24} color="yellow" />
          <MaterialIcons name="star" size={24} color="yellow" />
          <MaterialIcons name="star" size={24} color="yellow" />
          <MaterialIcons name="star" size={24} color="yellow" />
          <Text>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
          <Text style={{ fontWeight: 'bold' }}>1.790.000 đ</Text>
          <Text>0 đ</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 5,
          }}>
          <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 12 }}>
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <AntDesign
            name="questioncircleo"
            size={20}
            color="black"
            style={{ marginLeft: 10 }}
          />
        </View>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#333',
            padding: 5,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text>4 MÀU - CHỌN MÀU</Text>
          <AntDesign name="rightsquareo" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            padding: 10,
            margin: 20,
            borderRadius: 10,
          }}>
          <Text
            style={{ fontWeight: 'bold', color: '#fff', textAlign: 'center' }}>
            CHỌN MUA
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={MainGUI} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
