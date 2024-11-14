import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import Card from "@/components/Card";
import { useRouter } from "expo-router";
import { color } from "@/constants/Colors";

export default function RestaurantsList({ data, scrollViewRef }) {
  const window = useWindowDimensions();
  const item_width =
    Platform.OS === "ios" ? window.width * 0.89 : window.width * 0.55;

  const restaurantsData = data.flatMap((item) => item.data);
  const route = useRouter();

  const navigateHandler = (item) => {
    route.push({
      pathname: "/screens/restaurantdetails",
      params: { data: JSON.stringify(item) },
    });
  };

  return (
    <FlatList
      data={restaurantsData}
      ref={scrollViewRef}
      snapToInterval={item_width}
      snapToAlignment="center"
      decelerationRate={Platform.OS === "ios" ? 0 : 0}
      renderItem={({ item }) => (
        <Card
          image={item.image}
          restaurantName={item.restaurantName}
          rate={item.rate}
          location={item.location}
          handlePress={() => navigateHandler(item)}
        />
      )}
      contentContainerStyle={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: color.white,
  },
});
