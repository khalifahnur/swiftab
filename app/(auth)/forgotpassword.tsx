import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { color } from "@/constants/Colors";

const ForgotScreen = () => {
  const [email, setEmail] = useState("");

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subTitle}>
        Please enter email associated with your account.
      </Text>
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.labelTxt}>Email</Text>
          <TextInput
            placeholder="example@gmail.com"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.push("/(auth)/codeverify")}
      >
        <Text style={styles.loginButtonText}>Send Code</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resendButton}>
        <Text style={styles.resendBtnTxt}>Resend Code</Text>
      </TouchableOpacity>

      <View style={styles.signinContainer}>
        <Text style={styles.signinText}>Rembered password? </Text>
        <TouchableOpacity onPress={() => router.navigate("/(auth)/signin")}>
          <Text style={styles.signinLink}>Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    padding: 24,
  },
  title: {
    marginVertical:24,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 24,
  },
  labelTxt: {
    fontSize: 16,
    fontWeight: "500",
    paddingVertical: 10,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  loginButton: {
    backgroundColor: color.green,
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  resendButton: {
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    borderColor: "#D1D5DB",
    borderWidth: 1,
    marginTop: 10,
  },
  loginButtonText: {
    color: "#FFF",
    fontWeight: "600",
  },
  resendBtnTxt: {
    color: "#000",
    fontWeight: "600",
  },

  signinContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signinText: {
    color: "#6B7280",
  },
  signinLink: {
    color: "#2563EB",
  },
});
