import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import Mapbox, { MapView } from '@rnmapbox/maps';

export default function Location() {
    Mapbox.setAccessToken("pk.eyJ1IjoibGlma2hhIiwiYSI6ImNtMXdleTFqYTBqbmoyanM5dDljd3I2M2QifQ.btMGas0463FmyG2TnZ-9hA");
    const windows = useWindowDimensions();
    const max_width = windows.width;
    return (
    <View style={styles.page}>
        <View style={[styles.container,{width:max_width}]}>
          <MapView style={styles.map} />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    page: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
    container: {
      height: 100,
      backgroundColor: "tomato"
    },
    map: {
      flex: 1
    }
  });
  