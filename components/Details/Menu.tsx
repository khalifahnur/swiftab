import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";

export default function Menu({ menu }) {
  return (
    <View style={{ padding: 10 }}>
      <Text style={styles.menutitle}>Menu</Text>
      <View style={{ flexDirection: "column", gap: 20 }}>
        {menu.map((item, index) => {
          const keys = Object.keys(item);
          return keys.map((key) => (
            <TouchableOpacity
              key={key}
              style={{ height: 80, marginBottom: 10 }}
            >
              <ImageBackground
                source={require("../../assets/images/breakfast.jpeg")}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  padding: 15,
                }}
                imageStyle={{ borderRadius: 15 }}
              >
                <Text
                  style={{
                    color: "#000",
                    fontSize: 17,
                    fontWeight: "600",
                  }}
                >
                  {key}
                </Text>
                <Text
                  style={{
                    color: "#000",
                    fontSize: 15,
                    fontWeight: "400",
                  }}
                >
                  {item[key].length} items
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          ));
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menutitle: {
    color: "#000",
    fontSize: 20,
    fontWeight: "700",
    paddingBottom: 15,
  },
});
