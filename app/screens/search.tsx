import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import MapContainer from '@/components/Search/Map/MapContainer'
import { useNavigation } from 'expo-router'
import BottomSheetModal from '@/components/Search/BottomSheet/BottomSheetModal';

export default function SearchScreen() {
    const navigation = useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])
  return (
    <View style={styles.container}>
      <MapContainer />
      <BottomSheetModal />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})