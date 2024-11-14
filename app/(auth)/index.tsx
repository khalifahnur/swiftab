import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WelcomeScreen from '@/components/Auth/WelcomeScreen'

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})