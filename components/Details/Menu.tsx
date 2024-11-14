import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
import { useRouter } from "expo-router";

export default function Menu({ menu }) {
  const router = useRouter();

  const HandleMenu =(data,menuType)=>{
    router.navigate({pathname:'/screens/menu',params:{data:JSON.stringify(data),menuType:menuType}})
  }

  const imageBtn = [
    {id:10,image:require('../../assets/images/menu/breakfast.jpeg')},
    {id:20,image:require('../../assets/images/menu/lunch.jpeg')},
    {id:30,image:require('../../assets/images/menu/dinner.jpeg')},
  ]


  return (
    <View style={{ padding: 10 }}>
      <Text style={styles.menutitle}>Menu</Text>
      <View style={{ flexDirection: "column", gap: 20 }}>
        {menu.map((item) => {
          const keys = Object.keys(item);
          //console.log(item)
          return keys.map((key,index) => {
            //console.log(item[key])
            return(
              <TouchableOpacity
              key={index}
              style={{ height: 80, marginBottom: 10 }}
              onPress={()=>HandleMenu(item[key],key)}
            >
              <ImageBackground
                source={imageBtn[index].image}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  padding: 15,
                }}
                resizeMode="cover"
                imageStyle={{ borderRadius: 15, }}
              >
                <Text
                  style={{
                    color: "#000",
                    fontSize: 17,
                    fontWeight: "600",
                  }}
                >
                  {key}
                </Text>
                <Text
                  style={{
                    color: "#000",
                    fontSize: 15,
                    fontWeight: "400",
                  }}
                >
                  {item[key].length} items
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          )});
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menutitle: {
    color: "#000",
    fontSize: 20,
    fontWeight: "700",
    paddingBottom: 15,
  },
});
