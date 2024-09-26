import React, { useState } from 'react';
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import {
  View,
  TouchableOpacity,
  useWindowDimensions,
  Text,
  StyleSheet,
  Button,
  useColorScheme,
} from "react-native";
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors, primary, secondary } from '@/constants/Colors';

const TabLayout: React.FC = () => {
  const window = useWindowDimensions();
  const BOTTOM_WIDTH = (3.7 / 4) * window.width;
  const colorScheme = useColorScheme();

  return (
    <>
        <Tabs
          screenOptions={{
            headerShown: false,
            // tabBarBackground: () => (
            //   <BlurView
            //     tint="systemMaterialDark"
            //     intensity={100}
            //     style={StyleSheet.absoluteFill}
            //   />
            // ),
          }}
          tabBar={({ state, descriptors, navigation }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                borderRadius: 30,
                //backgroundColor: Colors[colorScheme??'light'].tabBackground,
                backgroundColor:primary.black,
                bottom: 2,
                left: 20,
                right: 20,
                elevation: 0,
                height: 55,
                width: BOTTOM_WIDTH,
                position: "absolute",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                {state.routes.map((route, index) => {
                  const { options } = descriptors[route.key];
                  const isFocused = state.index === index;

                  const onPress = () => {
                    const event = navigation.emit({
                      type: "tabPress",
                      target: route.key,
                      canPreventDefault: true,
                    });

                    if (!event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                  };

                  return (
                    <TouchableOpacity
                      accessibilityRole="button"
                      testID={options.tabBarTestID}
                      accessibilityState={isFocused ? { selected: true } : {}}
                      key={index}
                      onPress={onPress}
                      style={{ flex: 1, alignItems: "center" }}
                    >
                      {options.tabBarIcon &&
                        options.tabBarIcon({ focused: isFocused })}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          )}
        >
          {/* index screen */}
          <Tabs.Screen
            name="index"
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                style={[
                  focused && styles.ActiveIconStyle,
                  { alignItems: "center" },
                ]}
                >
                  {/* <Ionicons
                    name="home-outline"
                    size={focused ? 20 : 25}
                    color={focused ? "#00932C" : "#1E1E1E"}
                  /> */}
                  <TabBarIcon name={focused ? 'home':'home-outline'} size={20} color={focused?secondary.yellow:primary.white} />
                  {/* {focused && (
                    <View>
                      <Text style={{ color: "#00932C", fontSize: 9 }}>Home</Text>
                    </View>
                  )} */}
                </View>
              ),
            }}
          />
          {/* search screen */}
          <Tabs.Screen
            name="search"
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={[
                    focused && styles.ActiveIconStyle,
                    { alignItems: "center" },
                  ]}
                >
                  <TabBarIcon name={focused ? 'search' : 'search-outline'} size={20} color={focused?secondary.yellow:primary.white} />
                </View>
              ),
            }}
          />
          {/* report screen */}
          <Tabs.Screen
            name="scan"
            options={{
              
              tabBarIcon: ({ focused }) => (
                <View style={styles.container}>
                  <View style={styles.iconContainer}>
                    <View style={styles.iconWrapper}>
                      <AntDesign
                        name="scan1"
                        size={30}
                        color='#b1b1b1'
                        style={styles.icon}
                      />
                    </View>
                  </View>
                </View>
              ),
            }}
          />
          {/* reservation screen */}
          <Tabs.Screen
            name="explore"
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={[
                    focused && styles.ActiveIconStyle,
                    { alignItems: "center" },
                  ]}
                >
                  <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} size={20} color={focused?secondary.yellow:primary.white} />
                </View>
              ),
            }}
          />
          {/* settiings screen */}
          <Tabs.Screen
            name="settings"
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  
                >
                  <TabBarIcon name={focused ? 'settings' : 'settings-outline'} size={20} color={focused?secondary.yellow:primary.white} />
                </View>
              ),
            }}
          />
        </Tabs>

    </>
  );
};

const styles = StyleSheet.create({
  ActiveIconStyle: {
    //backgroundColor: "#fff",
    padding: 8,
    borderRadius: 32,
  },
  container: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "white",
  },
  iconContainer: {
    position: "absolute",
    bottom: -2,
    left: "0%", // Move the left edge to the center
    transform: [{ translateX: -32 }], // Move it back by half of its width to center it
  },
  iconWrapper: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    borderRadius: 32,
  },
  icon: {
    alignItems: "center",
  },
  addScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default TabLayout;
