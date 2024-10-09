import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '@/components/Reserve/Index/Container'
import { color } from '@/constants/Colors'

export default function IndexTab() {
  return (
    <View style={styles.container}>
      <Container />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
        backgroundColor:color.white
    }
})