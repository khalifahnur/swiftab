import { color } from "@/constants/Colors";
import React from "react";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, Button } from "react-native";

const Container = () => {
  const restaurants = [
    {
      name: "GastronomicGrove",
      travelTime: "20 min",
      cuisine: "Italian",
      address: "8502 Preston Rd. Inglewood",
      rating: 4.8,
    },
    {
      name: "AmbrosiaArcade",
      travelTime: "10 min",
      cuisine: "Mexican",
      address: "6391 Elgin St. Celina, De...",
      rating: 4.4,
    },
    {
      name: "TasteTrove Tavern",
      travelTime: "12 min",
      cuisine: "Mexican",
      address: "381 Ranchview Dr. Rich...",
      rating: 4.3,
    },
  ];

  return (
    <View style={styles.container}>
      {restaurants.map((restaurant, index) => (
        <View key={index} style={styles.card}>
          <View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={styles.name}>{restaurant.name}</Text>
              <Text style={styles.details}>
              ⭐ {restaurant.rating} 
              </Text>
            </View>
            <Text style={styles.details}>
              Travel Time: {restaurant.travelTime}
            </Text>
            <Text style={styles.details}>Cuisine: {restaurant.cuisine}</Text>
            <Text style={styles.details}>Address: {restaurant.address}</Text>
          </View>

          <View style={styles.buttons}>
            <Pressable style={styles.reviewBtn}>
              <Text style={{textAlign:'center',color:'#fff'}}>Write review</Text>
            </Pressable>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  card: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
  details: {
    fontSize: 12,
    color: "#6c757d",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  reviewBtn: {
    backgroundColor: color.navy,
    paddingVertical: 8,

    borderRadius: 5,
    width:'40%',
    alignSelf:'flex-end'
  },
});

export default Container;
