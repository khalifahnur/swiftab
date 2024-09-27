import {ScrollView, StyleSheet, Text, View} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '@/components/Home/Header';

import {primary } from '@/constants/Colors';
import Container from '@/components/Home/Container';
import { StatusBar } from 'expo-status-bar';



export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
        <View style={styles.header}>
          <Header />
        </View>
        <Container />     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:primary.lightBlue,
  },
  header:{
    paddingVertical:10,
    paddingHorizontal:20,
  },
});
