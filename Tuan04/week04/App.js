import { Text, SafeAreaView, StyleSheet, Image, Button, View } from 'react-native';


export default function App() {
  return (


    <SafeAreaView style={{backgroundColor: '#333', position: 'relative', height: '100%'}}>

        <SafeAreaView style={{backgroundColor: '#fff'}}>
          <SafeAreaView style={{flexDirection: 'row'}}>
            <SafeAreaView style={{padding: 10}}>
              <Image style={{width: 160, height: 160}} source={{uri: 'https://salt.tikicdn.com/cache/750x750/ts/product/7a/5e/62/8a692ce25c7ed5778c5e2e72576a15cc.jpg.webp'}} />
              <Text style={{fontSize: 14, marginLeft: 15, marginTop: 15, fontWeight: 'bold'}}>Mã giảm giá đã lưu</Text>
            </SafeAreaView>
            <SafeAreaView>
              <Text style={{padding: 5, fontWeight: 'bold'}}>Nguyên hàm tích phân và ứng dụng</Text>
              <Text  style={{padding: 5, fontWeight: 'bold'}}>Cung cấp bởi Tiki Trading</Text>
              <Text  style={{padding:5, color: 'red', fontSize: 20, fontWeight: 'bold'}}>141.800đ</Text>
              <View style={{width: 100, padding: 5}}><Button title="84 x 21" ></Button></View>
              <View style={{flexDirection: 'row',  padding:5, height: 50, alignItems: 'center'}}>
                <Button title="-" color="#333"/>
                <Text style={{margin: 10}}>1</Text>
                <Button title="+" color="#333"/>
              </View>
              <Text style={{color: 'blue'}}>
                Áp dụng tại đây
              </Text>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={{flexDirection:'row'}} >
          <View style={{width: 200, borderColor: 'yellow', borderWidth: 1, height: 60, marginLeft: 20, justifyContent: 'center', alignItems: 'center'}}>

       
                  <Text style={{textAlign: 'center', justifyContent: 'center',fontWeight: 'bold', alignItems: 'center'}}>
                    <View style={{width: 40, height: 20, backgroundColor: 'yellow', marginRight: 10}}></View> 
                     MÃ GIẢM GIÁ
                  </Text>
          </View>
                    <View style={{flexDirection:'row', alignItems: 'center', paddingLeft: 10, height: 40}}>
                  <Button title='Áp dụng'/>
          </View>

        </SafeAreaView>
      </SafeAreaView>
      


      <SafeAreaView style={{backgroundColor: '#fff', flexDirection: 'row', height: 100, marginTop: 15, padding: 10, alignItems: 'center'}}>
        <Text  style={{fontSize: 14, fontWeight: 600}}>Bạn có phiếu tặng quà từ Tiki/Got it</Text>
        <Text style={{color: 'blue', fontSize: 14, fontWeight: 500, paddingLeft: 10}}>Nhập tại đây</Text>
      </SafeAreaView>
            <SafeAreaView style={{backgroundColor: '#fff', flexDirection: 'row', height: 100, marginTop: 15, padding: 10, alignItems: 'center', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Tạm tính</Text>
        <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>141.800đ</Text>
      </SafeAreaView>

    
    <SafeAreaView style={{ position: 'absolute', bottom: 10, width: '100%'}}>
            <SafeAreaView style={{backgroundColor: '#fff', flexDirection: 'row', height: 100, marginTop: 15, padding: 10, alignItems: 'center', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Tổng tiền</Text>
        <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>141.800đ</Text>
        
      </SafeAreaView>
          <Button title="Thanh toán" color="red"/>

    </SafeAreaView>


    </SafeAreaView>

    
    

   
   
  );




}
