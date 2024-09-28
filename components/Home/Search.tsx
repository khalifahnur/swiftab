import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function Search() {
  const router = useRouter();
  const HandlePress = () => {
    router.navigate("/(tabs)/search");
  };
  return (
    <View style={styles.search}>
      <Pressable style={{ padding: 5 }} onPress={HandlePress}>
        <Text>Search ...</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    padding: 5,
    borderWidth: 2,
    borderColor: "#e8e8e8",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
});
