import { Image, StyleSheet, Text, View, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { primary } from '@/constants/Colors';

type cardProps = {
    image:ImageSourcePropType,
    restaurantName:string;
    rate:number;
    location:string;
}
export default function Card({image,restaurantName,rate,location}:cardProps) {
  return (
    <View style={styles.card}>
            <Image source={image} style={styles.restaurantImage} />
            <View style={styles.detailsContainer}>
              <View style={styles.detail}>
                <Text style={styles.restaurantName}>{restaurantName}</Text>
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>{rate}</Text>
                  <Ionicons name="star" size={13} color="gold" />
                </View>
              </View>
              
              <View style={styles.locationContainer}>
                <Ionicons name="location-sharp" size={16} color="gray" />
                <Text style={styles.locationText}>{location}</Text>
              </View>

              
            </View>
          </View>
  )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: primary.white,
      shadowColor: "#000",
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.9,
      shadowRadius: 5,
      elevation: 1,
      borderRadius: 10,
      marginHorizontal: 10,
      width: 220,
    },
    restaurantImage: {
      width: "100%",
      height: 100,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    detailsContainer: {
      padding: 10,
    },
    detail:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    restaurantName: {
      fontSize: 13,
      fontWeight: "500",
    },
    locationContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 4,
    },
    locationText: {
      fontSize: 12,
      color: "gray",
      marginLeft: 4,
    },
    ratingContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 4,
    },
    ratingText: {
      fontSize: 13,
      color: "gray",
      marginRight: 4,
    },
  });