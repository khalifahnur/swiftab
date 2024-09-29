import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NewSubHeader from './NewSubHeader'

export default function Promotions() {
  return (
    <>
    <NewSubHeader headerTitle='Promotions'  />
    <View style={{ paddingHorizontal: 20, marginBottom: 25 }}>
        <View style={styles.imageHeader}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              alignItems: "center",
              height: 95,
            }}
          >
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                  color: "#fff",
                }}
              >
                Get special offer 
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                  color: "#fff",
                }}
              >
                up to 30%
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "400",
                  color: "#fff",
                }}
              >
                Book Now
              </Text>
            </View>
            <View style={{ width: 80, height: 80, alignItems: "center",flexDirection:'row',gap:10 }}>
                <View style={styles.line} />
              <Image
                source={require("../../assets/images/restaurants/ad.jpeg")}
                style={{ width: 80, height: 80, borderRadius: 40 }}
              />
            </View>
          </View>
        </View>
      </View>
    </>
    
  )
}

const styles = StyleSheet.create({
    imageHeader: {
        marginTop: 5,
        backgroundColor: "#4d81f1",
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#4d81f1",
        shadowColor: "#000",
        shadowOffset: {
          width: 10,
          height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 10,
      },
      line:{
        height: 50,
        borderWidth: 2,
        borderColor: '#1e1e1e',
        borderRadius: 50, 

      },
})