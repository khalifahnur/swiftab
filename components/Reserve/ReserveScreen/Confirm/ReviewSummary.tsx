import React, { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import useStore from "@/store/useStore";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import Header from "@/components/Details/Header";
import { color } from "@/constants/Colors";
import Details from "./Details";
import { useLocalSearchParams } from "expo-router";

const ReviewSummary: React.FC = () => {
  const param = useLocalSearchParams();
  const navigate = useNavigation();
  const { selectedDate, guestCount, selectedTableId, selectedTime } =
    useStore();
  const dateTime = moment(`${selectedDate}T${selectedTime}`);
  const formattedDateTime = dateTime.format("MMMM DD, YYYY | hh:mm A");
  const bookingDate = moment().format("MMMM Do YYYY | h:mm:ss a");

  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  });
  return (
    <>
      <Header headerText="Summary" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={param.image}
            style={styles.restaurantImage}
          />
          <View style={styles.restaurantInfo}>
            <Text style={styles.restaurantName}>{param.restaurantName}</Text>
            <Text style={styles.restaurantDetails}>15 min • Italian</Text>
            <Text style={styles.restaurantAddress}>{param.location}</Text>
          </View>
        </View>
        {/* <View style={styles.divider} /> */}

        <Details
          bookingDate={bookingDate}
          formattedDateTime={formattedDateTime}
          guestCount={guestCount}
          selectedTableId={selectedTableId}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Confirm Booking</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    marginBottom: 20,
  },
  restaurantImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  restaurantInfo: {
    marginLeft: 15,
    justifyContent: "center",
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  restaurantDetails: {
    fontSize: 14,
    color: "#666666",
    marginVertical: 5,
  },
  restaurantAddress: {
    fontSize: 12,
    color: "#666666",
  },
  divider: {
    width: "100%",
    borderColor: "#e1e1e1",
    borderWidth: 1,
    marginVertical: 10,
  },
  footer: {
    shadowColor: "#fff",
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: color.green,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    bottom:10
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ReviewSummary;
