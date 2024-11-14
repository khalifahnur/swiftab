import { Slot, Stack } from 'expo-router';
import React from 'react';

export default function ScreensLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="restaurantdetails" />
          <Stack.Screen name="reserve" options={{ headerShown: false }} />
          <Stack.Screen name="menu" options={{ headerShown: false }} />
          <Stack.Screen name="cart" />
          <Stack.Screen name="account" options={{ headerShown: false }} />
          <Stack.Screen name="setting" options={{ headerShown: false }} />
          <Stack.Screen name="help" options={{ headerShown: false }} />
          <Stack.Screen name="availableres" options={{ headerShown: false }} />
          <Stack.Screen name="search" />
          <Stack.Screen name="confirm" /> 
    </Stack>
  );
}
