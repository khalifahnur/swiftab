import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import useStore from "@/store/useStore";

export default function TimeTab() {
  const { selectedTime, setSelectedTime } = useStore();
  const timeSlots = [
    {
      title: "Breakfast",
      times: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00"],
    },
    {
      title: "Lunch",
      times: [
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
      ],
    },
    {
      title: "Dinner",
      times: [
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
      ],
    },
  ];

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };
  console.log(selectedTime);
  return (
    <View style={styles.timeSlots}>
      {timeSlots.map((slot, index) => (
        <View key={index} style={styles.timeGroup}>
          <Text style={styles.groupTitle}>{slot.title}</Text>
          <View style={styles.timeRow}>
            {slot.times.map((time, timeIndex) => (
              <Pressable
                key={timeIndex}
                onPress={() => handleTimeSelect(time)}
                style={[
                  styles.timeButton,
                  selectedTime === time && styles.timeSelected,
                ]}
              >
                <Text
                  style={
                    selectedTime === time
                      ? styles.timeTextSelected
                      : styles.timeText
                  }
                >
                  {time}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f7f8f8",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#e0e0e0",
  },
  tabSelected: {
    backgroundColor: "#000",
  },
  tabText: {
    fontSize: 16,
    color: "#000",
  },
  tabTextSelected: {
    color: "#fff",
  },
  timeSlots: {
    flex: 1,
  },
  timeGroup: {
    marginBottom: 20,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  timeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  timeButton: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#e0e0e0",
  },
  timeSelected: {
    backgroundColor: "#000",
  },
  timeText: {
    color: "#000",
  },
  timeTextSelected: {
    color: "#fff",
  },
  nextButton: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#000",
    alignItems: "center",
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
