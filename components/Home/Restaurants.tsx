import {FlatList, Image, Platform, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import Card from "../Card";
import { color } from "@/constants/Colors";
import { useRouter } from "expo-router";


type restaurantsProps = {
  id: number;
  image: any;
  restaurantName: string;
  location: string;
  rate: number;
  about: {
      id: number;
      cuisine: string;
      location: string;
      averageprice: number;
      hrsofoperation: string;
  }[];
  menu: {
    breakfast: {
      id: number;
      image: string;
      name: string;
      description: string;
      cost: number;
      rate: number;
  }[];
  lunch: {
    id: number;
    image: string;
    name: string;
    description: string;
    cost: number;
    rate: number;
}[];
dinner: {
  id: number;
  image: string;
  name: string;
  description: string;
  cost: number;
  rate: number;
}[];
}[];
review: {
  review: {
    name: string;
    image: string;
    reviewTxt: string;
    rating: number;
}
}[];
}[]


export default function Restaurants({data}:restaurantsProps) {
  const window = useWindowDimensions();
  const item_width = Platform.OS === "ios" ? window.width * 0.89 : window.width * 0.55;
  const route = useRouter();

  const NavigateHandler = (data:any)=>{
    route.push({pathname:'/screens/restaurantdetails',params:{data:data}})
  }
  return (
    <>
    <FlatList
      data={data}
      snapToInterval={item_width}
      snapToAlignment="center"
      decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
      renderItem={({ item }) => {
        return (
          <Card image={item.image} restaurantName={item.restaurantName} rate={item.rate} location={item.location} handlePress={()=>NavigateHandler(item)} />
        );
      }}
      //estimatedItemSize={200}
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
    backgroundColor:color.white
  },
});
