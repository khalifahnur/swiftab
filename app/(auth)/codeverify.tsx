import {
  Alert,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import axios from "axios";
import Constants from "expo-constants";

const CELL_COUNT = 4;

export default function VerifyScreen() {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const router = useRouter();
  //const localhost = Constants.expoConfig?.extra?.localhost;
  const params = useLocalSearchParams();
  const email = params?.email;

  // const VerifyCodeHandler = async () => {
  //   const verificationCode = value;
  //   if (email && verificationCode) {
  //     try {
  //       const response = await axios.post(
  //         `http://${localhost}:3002/api/auth/verify-code`,
  //         { email, verificationCode }
  //       );
  //       if (response.status === 200) {
  //         router.push({ pathname: "/(auth)/newpassword", params: { email } });
  //       } else if (response.status === 400) {
  //         Alert.alert("Invalid or expired verification code");
  //       }
  //     } catch (e) {
  //       console.log("Error occured", e);
  //       Alert.alert("Error verifying code");
  //     }
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.closebtn}
          onPress={() => router.navigate("/(auth)/signin")}
        >
          <EvilIcons name="close" size={20} color="#999" />
        </TouchableOpacity>
      </View>
      <View style={styles.subContainer}>
        <View style={styles.subheader}>
          <Text style={styles.headertxt}>Verification Code</Text>
          <Text style={styles.headersubtxt}>
            We send A verification code to abc@gmail.com
          </Text>
        </View>
        <View style={styles.textinp}>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            //rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            autoComplete={Platform.select({
              android: "sms-otp",
              default: "one-time-code",
            })}
            testID="my-code-input"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>

        <Pressable 
        style={styles.resetbtn} 
        //onPress={VerifyCodeHandler}
        >
          <Text style={{ color: "#fff" }}>Continue</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F7",
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    marginLeft: "auto",
  },
  closebtn: {
    padding: 20,
    backgroundColor: "#e8e8e8",
    borderRadius: 30,
  },
  subContainer: {
    justifyContent: "center",
    flex: 0.7,
  },
  subheader: {
    alignItems: "center",
  },
  headersubtxt: {
    fontSize: 14,
    fontWeight: "400",
  },
  textinp: {
    margin: 20,
  },
  resetbtn: {
    padding: 20,
    backgroundColor: "navy",
    borderRadius: 8,
    alignItems: "center",
    alignSelf: "center",
  },
  headertxt: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#000",
  },
});
