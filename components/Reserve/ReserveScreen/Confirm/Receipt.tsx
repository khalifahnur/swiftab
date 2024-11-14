import { StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import { color } from '@/constants/Colors';

interface ReceiptProps {
  children: ReactNode;
}

export default function Receipt({ children }: ReceiptProps) {
  return (
    <View
      style={{
        width: '100%',
        height: '70%',
        backgroundColor: color.gray,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative',
      }}>
      <View
        style={{
          backgroundColor: "#f7f8f8",
          height: 50,
          width: 30,
          borderBottomRightRadius: 50,
          borderTopRightRadius: 50,
          position: 'absolute',
          left: 0,
        }}
      />
      {children} 
      <View
        style={{
          backgroundColor: "#f7f8f8",
          height: 50,
          width: 30,
          borderBottomLeftRadius: 50,
          borderTopLeftRadius: 50,
          position: 'absolute',
          right: 0,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
