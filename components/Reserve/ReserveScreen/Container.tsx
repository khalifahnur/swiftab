import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import TimeTab from "./TimeTab";
import DateTab from "./DateTab";
import GuestTab from "./GuestTab";
import TableTab from "./TableTab";
import Header from "@/components/Details/Header";
import { color } from "@/constants/Colors";

export default function Container() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const restaurantInfo = JSON.parse(params.data);

  const [selectedTab, setSelectedTab] = useState("Date");
  const tabs = ["Date", "Time", "Guest", "Table"];

  const handleNext = () => {
    const currentIndex = tabs.indexOf(selectedTab);
    if (currentIndex < tabs.length - 1) {
      setSelectedTab(tabs[currentIndex + 1]);
    } else {
      console.warn("Reached the last tab.");
    }
  };

  const HandleCancel = () => {
    router.back();
  };

  const DisplayComponents = () => {
    switch (selectedTab) {
      case "Date":
        return <DateTab />;
      case "Time":
        return <TimeTab />;
      case "Guest":
        return <GuestTab />;
      case "Table":
        return <TableTab />;
    }
  };

  return (
    <>
      <Header headerText="Reservation" />
      <View style={styles.container}>
        <View style={styles.tabs}>
          {tabs.map((tab, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedTab(tab)}
              style={[
                styles.tabButton,
                selectedTab === tab && styles.tabSelected,
              ]}
            >
              <Text
                style={
                  selectedTab === tab ? styles.tabTextSelected : styles.tabText
                }
              >
                {tab}
              </Text>
            </Pressable>
          ))}
        </View>

        <DisplayComponents />
      </View>

      {selectedTab === "Table" ? (
        <View style={styles.tableBtn}>
          <TouchableOpacity style={styles.reserveBtn} onPress={()=>router.push({pathname:'/screens/confirm',params:restaurantInfo})}>
            <Text style={styles.nextButtonText}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelBtn} onPress={HandleCancel}>
            <Text style={styles.cancelTxt}>Cancel</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#f7f8f8",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    marginTop: 20,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#e0e0e0",
  },
  tabSelected: {
    backgroundColor: color.green,
  },
  tabText: {
    fontSize: 14,
    color: "#000",
  },
  tabTextSelected: {
    color: "#fff",
  },
  nextButton: {
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: color.green,
    alignItems: "center",
  },
  reserveBtn: {
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: color.green,
    alignItems: "center",
    width: "40%",
  },
  cancelBtn: {
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: color.gray,
    alignItems: "center",
    width: "40%",
  },
  cancelTxt: {
    color: "#000",
    fontSize: 16,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  tableBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
