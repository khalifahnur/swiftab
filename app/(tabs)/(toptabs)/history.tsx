import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '@/components/Reserve/History/Container'

export default function HistoryTab() {
  return (
    <View style={styles.container}>
      <Container />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})