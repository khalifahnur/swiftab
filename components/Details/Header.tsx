import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function Header({headerText}) {
  const route = useRouter();
  const window = useWindowDimensions();
  const MAX_WIDTH = window.width;
  return (
    <View style={[styles.header, { gap: (MAX_WIDTH * 1) / 2 - 100 }]}>
      <Pressable
        onPress={() => route.back()}
        style={{ backgroundColor: "#d8d8d8", padding: 10, borderRadius: 20 }}
      >
        <AntDesign name="left" size={20} color="black" />
      </Pressable>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          fontWeight:'400'
        }}
      >
        {headerText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 5,
    paddingHorizontal: 20,
    alignItems: "center",
  },
});
