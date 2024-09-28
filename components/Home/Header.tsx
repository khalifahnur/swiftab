import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { TabBarIcon } from '../navigation/TabBarIcon';
import { AntDesign } from '@expo/vector-icons';
import Search from './Search';

export default function Header() {
    const [greeting, setGreeting] = useState<string>('');

    useEffect(() => {
        const hour = moment().hour();
        let greetingText = "";
        if (hour >= 5 && hour < 12) {
          greetingText = "Good Morning";
        } else if (hour >= 12 && hour < 17) {
          greetingText = "Good Afternoon";
        } else {
          greetingText = "Good Evening";
        }
    
        setGreeting(greetingText);
      }, [greeting]);
  return (
    <View >
      <View style={styles.header}>
      <View>
        <Text style={styles.greetings}>{greeting},</Text>
        <Text style={styles.name}>Khalif</Text>
      </View>
      <Pressable style={styles.cart}>
        <AntDesign name="shoppingcart" size={20} color="black" />
        </Pressable>
        </View>
        <View style={styles.search}>
          <Search />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    greetings:{
        fontSize:15,
        fontWeight:'400',
    },
    name:{
        fontSize:16,
        fontWeight:'600'
    },
    cart:{
        backgroundColor:'#e8e8e8',
        padding:10,
        borderRadius:20,
    },
    search:{
      marginVertical:10,
    },
})