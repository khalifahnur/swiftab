import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Spinner from "react-native-loading-spinner-overlay";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomModal from "./BottomModal";
import { color } from "@/constants/Colors";

export default function Setting() {
  const router = useRouter();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [notOff, setNotOff] = useState(false);

  const LogOutHandler = async () => {
    setLoading(true);

    try {
      await AsyncStorage.clear();
      router.push("/(auth)/signin");

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } catch (error) {
      setLoading(false);
      console.log("Error logging out:", error);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  if (loading) {
    return (
      <View
        style={{
          justifyContent: "center",
          backgroundColor: "#ecf0f1",
        }}
      >
        <Spinner
          visible={loading}
          textContent={"Logout..."}
          textStyle={{ color: "#FFF" }}
        />
      </View>
    );
  }
  
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                backgroundColor: "#e8e8e8",
                padding: 10,
                borderRadius: 20,
              }}
            >
              <Ionicons name="arrow-back" size={20} color="#000" />
            </TouchableOpacity>
            <Text style={styles.title}>Settings</Text>
          </View>

          {/* notifications */}
          <TouchableOpacity style={styles.details}>
            <View style={styles.detail}>
              <Ionicons name="notifications" size={24} color="black" />
              <Text style={{ marginRight: "auto", marginLeft: 30 }}>
                Notifications
              </Text>
              <FontAwesome
                name={notOff ? "toggle-on" : "toggle-off"}
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>

          {/* Payment */}
          <TouchableOpacity style={styles.details}>
            <View style={styles.detail}>
              <MaterialIcons name="language" size={24} color="black" />
              <Text style={{ marginRight: "auto", marginLeft: 30 }}>
                Payment
              </Text>
              <Entypo name="chevron-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
          {/* log out */}
          <TouchableOpacity
            style={styles.details}
            onPress={() => setModalVisible(true)}
          >
            <View style={styles.detail}>
              <MaterialIcons name="logout" size={24} color="black" />
              <Text style={{ marginRight: "auto", marginLeft: 30 }}>
                Log Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {modalVisible && <BottomModal logOutHandle={LogOutHandler} />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: color.graywhite,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 100,
  },
  details: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderColor: "#e8e8e8",
    borderWidth: 2,
    borderRadius: 10,
  },
  detail: {
    flexDirection: "row",
  },
  svgCurve: {
    width: "100%",
  },
});
