import { ActivityIndicator, Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import ModalScreen from './Modal';

export default function Container() {
    const params = useLocalSearchParams();
    const {width:MAX_WIDTH} = useWindowDimensions();
    const data = JSON.parse(params.data);
    const menuType = params.menuType;

    const router = useRouter();

    const [modalVisible,setModalVisible] = useState(false)
    const [modalData,setModalData] = useState();
    

    const handleModal = (item)=>{
        setModalVisible(true)
        setModalData(item)
    }

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { gap: (MAX_WIDTH * 1) / 2 - 80 }]}>
        <Pressable
          onPress={() => router.back()}
          style={{ backgroundColor: "#fff", padding: 10, borderRadius: 20 }}
        >
          <AntDesign name="arrowleft" size={20} color="black" />
        </Pressable>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontFamily: "PlusJakartaSansMedium",
          }}
        >
          {menuType}
        </Text>
      </View>

      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        {data?.map((item, index) => (
          <Pressable onPress={()=>handleModal(item)} key={index} style={styles.cartStyle}>
            <View style={{ flex: 0.2 }}>
                <Image source={item.image} style={{ width: 50, height: 50 }} />
            </View>
            <View style={{ flex: 0.8,  }}>
              <Text>{item.name}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: 5,
                }}
              >

                <Text
                  style={{ fontSize: 14, fontWeight: "600", paddingTop: 10,textAlign:'justify' }}
                  numberOfLines={1}
                  ellipsizeMode='tail'
                  
                >
                  {item.description}
                </Text>
                
              </View>
              <Text
                  style={{ fontSize: 14, fontWeight: "600", paddingTop: 10 }}
                >
                  Ksh.{item.cost}
                </Text>
            </View>
            {/* <View>
              <Pressable
                //onPress={() => HandleRemoveItem(desc.id)}
                style={{
                  backgroundColor: "#e8e8e8",
                  padding: 10,
                  borderRadius: 20,
                }}
              >
                <AntDesign name="delete" size={20} color="#84d76b" />
              </Pressable>
            </View> */}
          </Pressable>
        ))}
      </View>
      <ModalScreen modalVisible={modalVisible} data={modalData} setModalVisible={setModalVisible} />

    </SafeAreaView>
  );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {
    flexDirection: "row",
    marginTop: 5,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  cartStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#fff",
    shadowColor: "#fff",
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 15,
  },
  cartTotalStyle: {
    paddingHorizontal: 20,
    position: "absolute",
    flex: 0.5,
    bottom: 20,
    left: 0,
    right: 0,
  },

  addToCartButton: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#4d81f1",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  addToCartText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  subtotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 5,
    paddingTop: 5,
  },
});

