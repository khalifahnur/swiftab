import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '@/components/Settings/Container'

export default function SettingsScreen() {
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