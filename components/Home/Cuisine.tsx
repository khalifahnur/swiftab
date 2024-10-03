import {FlatList, Image, Platform, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import NewSubHeader from "./NewSubHeader";
import { color } from "@/constants/Colors";

const data = [
    {
        id:9,
        image:require('../../assets/images/cuisine/us.jpeg'),
        name:'American'
    },
    {
        id:10,
        image:require('../../assets/images/cuisine/italia.jpeg'),
        name:'Italian'
    },
    {
        id:11,
        image:require('../../assets/images/cuisine/somali.jpeg'),
        name:'Somali'
    },
    {
        id:12,
        image:require('../../assets/images/cuisine/kenyan.jpeg'),
        name:'Kenyan'
    },
    {
        id:13,
        image:require('../../assets/images/cuisine/seafood.jpeg'),
        name:'Sea Food'
    },
    {
        id:14,
        image:require('../../assets/images/cuisine/arab.jpeg'),
        name:'Arab'
    },
    {
        id:15,
        image:require('../../assets/images/cuisine/japanese.jpeg'),
        name:'Japanese'
    },
    
]
export default function Cuisine() {
  const window = useWindowDimensions();
  const item_width = Platform.OS === "ios" ? window.width * 0.89 : window.width * 0.65;

  return (
    <>
    <NewSubHeader headerTitle={'Browse by cuisine'} btnText={'More'} />
    <FlatList
      data={data}
      snapToInterval={item_width}
      snapToAlignment="center"
      decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
      renderItem={({ item }) => {
        return (
          <View style={styles.subContainer}>
            <Image source={item.image} style={styles.restaurantImage} /> 
            <Text style={{color:color.white,fontSize:13}}>{item.name}</Text>      
          </View>
        );
      }}
      contentContainerStyle={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor:color.green,
    paddingVertical:10

  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:10
  },
  restaurantImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: color.gray,
  },
});
