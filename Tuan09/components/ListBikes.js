import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Item from './Item';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchBikes } from "./redux/useSlice"; // Import action fetchBikes từ bikesSlice
const DATA = [
  {
    id: '1',
    imgPath: require('../assets/images/bifour_small_-removebg-preview.png'),
    name: 'Pinarello',
    price: '1800',
  },

  {
    id: '2',
    imgPath: require('../assets/images/bione-small-removebg-preview.png'),
    name: 'Pina Bike',
    price: '1500',
  },

  {
    id: '3',
    imgPath: require('../assets/images/bithree_removebg-preview.png'),
    name: 'Pinarello',
    price: '1800',
  },
  {
    id: '4',
    imgPath: require('../assets/images/bitwo-removebg-preview.png'),
    name: 'Pinarello',
    price: '1800',
  },
  {
    id: '5',
    imgPath: require('../assets/images/bifour_-removebg-preview.png'),
    name: 'Pina Mountai',
    price: '1700',
  },
  {
    id: '6',
    imgPath: require('../assets/images/bione-removebg-preview.png'),
    name: 'Pinarello',
    price: '1900',
  },
  {
    id: '7',
    imgPath: require('../assets/images/bione-small-removebg-preview.png'),
    name: 'Pinarello',
    price: '2700',
  },
  {
    id: '8',
    imgPath: require('../assets/images/bithree-small_removebg-preview.png'),
    name: 'Pinarello',
    price: '1350',
  },
];

export default function ListBikes() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.bikes);
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          padding: 10,
        }}>
        <View style={{}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: 'red',
            }}>
            The world’s Best Bike
          </Text>
        </View>
        <TouchableOpacity  onPress={()=>navigation.navigate("AddBike")} style={[styles.buttonFilter, {backgroundColor: "#E94141"}]} >
            <Text style={[styles.labelButton, {color: "white"}]}>Add a bike</Text>
          </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.buttonFilter}>
            <Text style={styles.labelButton}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFilter}>
            <Text style={styles.labelButton}>Roadbike</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFilter}>
            <Text style={styles.labelButton}>Mountain</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 5,
        }}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item imgPath={item.imgPath} name={item.name} price={item.price} />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{ alignItems: 'center' }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonFilter: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#E9414187',
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelButton: {
    fontSize: 16,
    fontWeight: 400,
    color: '#E94141',
  },
});
