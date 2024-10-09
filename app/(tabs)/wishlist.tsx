import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '@/components/Wishlist/Container'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function WishListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Container />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})