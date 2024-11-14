import { StyleSheet, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { color } from "@/constants/Colors";
import Container from "@/components/Home/Container";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      
      <Container />
      <View style={styles.footer}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:"#fbfbfb",
    backgroundColor: color.white,

  },
  footer:{
    backgroundColor:color.green,
    height:54,
  },
});
