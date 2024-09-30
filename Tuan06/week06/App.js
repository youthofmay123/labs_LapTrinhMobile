import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Button } from 'react-native-elements';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import piture1 from './assets/ca_nau_lau.png';
import piture2 from './assets/do_choi_dang_mo_hinh.png';
import piture3 from './assets/xa_can_cau.png';
import piture4 from './assets/ga_bo_toi.png';
import piture5 from './assets/lanh_dao_gian_don.png';
import piture6 from './assets/hieu_long_con_tre.png';
import Feather from '@expo/vector-icons/Feather';

const Item = (props) => {
  const { item } = props;

  return (
    <View
      style={{
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        style={{ width: 78, height: 78, padding: 5 }}
        source={require(item.image)}
      />
      <View
        style={{
          paddingLeft: 15,
          height: '100%',
          maxWidth: 150,
          maxHeight: 80,
        }}>
        <Text style={{ overflow: 'hidden' }}>{item.title}</Text>
        <Text style={{ paddingTop: 10, color: 'red' }}>{item.shope}</Text>
      </View>
      <View style={{ padding: 20 }}>
        <Button
          title="Chat"
          buttonStyle={{
            backgroundColor: 'red',
            width: 80,
            height: 35,
          }}></Button>
      </View>
    </View>
  );
};

export default function App() {
  const data = [
    {
      title: 'Ca nấu lẩu, nấu mì mini',
      shope: 'Shop Devang',
      image: './assets/ca_nau_lau.png',
    },
    {
      title: '1KG KHÔ GÀ BƠ TỎI',
      shope: 'Shop LTD Food',
      image: './assets/ga_bo_toi.png',
    },
    {
      title: 'Xe cần cẩu đa năng',
      shope: 'Shop Thế giới đồ chơi',
      image: './assets/xa_can_cau.png',
    },
    {
      title: 'Đồ chơi dạng mô hình',
      shope: 'Shop Thế giới đồ chơi',
      image: './assets/do_choi_dang_mo_hinh.png',
    },
    {
      title: 'Lãnh đạo giản đơn',
      shope: 'Shop Minh Long book',
      image: './assets/lanh_dao_gian_don.png',
    },
    {
      title: 'Hiếu lòng con trẻ',
      shope: 'Shop Minh Long book',
      image: './assets/hieu_long_con_tre.png',
    },
  ];
  //
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: '15%', backgroundColor: '#C4C4C4' }}>
        <View
          style={{
            backgroundColor: '#1BA9FF',
            height: '50%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          }}>
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>

          <Text style={{ color: 'white', fontSize: 17 }}>Chat</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons name="cart-check" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            paddingLeft: 30,
            paddingTop: 10,
            fontSize: 12,
            fontWeight: 600,
          }}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop
        </Text>
      </View>

      <View style={{ backgroundColor: 'white', height: '78%' }}>
        <ScrollView>
          {data.map((item) => (
            <Item item={item} />
          ))}
        </ScrollView>
      </View>
      <View style={{ backgroundColor: 'green', height: '10%' }}>
        <View
          style={{
            backgroundColor: '#1BA9FF',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          }}>
          <TouchableOpacity>
            <Feather name="menu" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="home" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="reload1" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 8,
    maxWidth: 350,
    maxHeight: 600,
  },
});
