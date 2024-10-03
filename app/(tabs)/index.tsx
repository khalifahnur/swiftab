import {ScrollView, StyleSheet, Text, View} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '@/components/Home/Header';

import {color, primary, secondary } from '@/constants/Colors';
import Container from '@/components/Home/Container';
import { StatusBar } from 'expo-status-bar';



export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark' backgroundColor='#f8f8f8' />
          <Container />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    //backgroundColor:"#fbfbfb",
    backgroundColor:color.white,

  },

});
