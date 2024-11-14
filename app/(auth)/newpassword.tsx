// import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
// import React, { useState } from "react";
// import InputField from "@/components/InputField";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useLocalSearchParams, useRouter } from "expo-router";
// import Constants from "expo-constants";
// import axios from "axios";

// export default function NewPsswdScreen() {
//   const [psswd, setPsswd] = useState("");
//   const router = useRouter();
//   const localhost = Constants.expoConfig?.extra?.localhost;
//   const params = useLocalSearchParams();
//   const email = params?.email;

//   console.log(email,psswd)

//   // const ResetPasswordHandler = async () => {
//   //   const newPassword = psswd;
//   //   if (email && newPassword) {
//   //     try {
//   //       const response = await axios.post(
//   //         `http://${localhost}:3002/api/auth/reset-password`,
//   //         { email, newPassword }
//   //       );
//   //       if (response.status === 200) {
//   //         router.navigate("/(auth)/signin");
//   //         Alert.alert("Password updated successfully")
//   //       } else if (response.status === 404) {
//   //         Alert.alert("User not found");
//   //       }
//   //     } catch (e) {
//   //       console.log("Error occured", e);
//   //       Alert.alert("Error updating password");
//   //     }
//   //   }
//   // };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}></View>
//       <View style={styles.subContainer}>
//         <View style={styles.subheader}>
//           <Text style={styles.headertxt}>Set new password</Text>
//           <Text style={styles.headersubtxt}>Must be atleast 8 characters.</Text>
//         </View>
//         <View style={styles.textinp}>
//           <InputField labelTxt="New Password :" type="password" onChangeText={(txt)=>setPsswd(txt)}/>
//         </View>

//         <Pressable 
//         style={styles.resetbtn} 
//         //</View>onPress={ResetPasswordHandler}
//         >
//           <Text style={{ color: "#fff" }}>Reset Password</Text>
//         </Pressable>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F2F4F7",
//     paddingHorizontal: 20,
//   },
//   header: {
//     marginTop: 20,
//     marginLeft: "auto",
//   },
//   closebtn: {
//     padding: 20,
//     backgroundColor: "#e8e8e8",
//     borderRadius: 30,
//   },
//   subContainer: {
//     justifyContent: "center",
//     flex: 0.7,
//   },
//   subheader: {
//     alignItems: "center",
//   },
//   headersubtxt: {
//     fontSize: 14,
//     fontWeight: "400",
//     color: "gray",
//   },
//   textinp: {
//     margin: 20,
//   },
//   resetbtn: {
//     padding: 20,
//     backgroundColor: "navy",
//     borderRadius: 8,
//     alignItems: "center",
//     alignSelf: "center",
//   },
//   headertxt: {
//     fontSize: 20,
//     fontWeight: "500",
//     color: "#000",
//   },
// });
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { color } from "@/constants/Colors";

const NewPsswdScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    await AsyncStorage.setItem("AuthToken", "1234sfaskhnc@-@sak");
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <View style={styles.inputContainer}>
        <Text style={{textAlign:'center'}}>Please enter your new password</Text>
        <View>
          <Text style={styles.labelTxt}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Must be 8 characters"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={styles.passwordInput}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text style={styles.eyeIcon}>{showPassword ? "👁" : "👁‍🗨"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Reset Password</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default NewPsswdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical:24,
  },
  labelTxt:{
    fontSize:16,
    fontWeight:'500',
    paddingVertical:10,
  },
  inputContainer: {
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
  },
  passwordInput: {
    flex: 1,
    padding: 16,
  },
  eyeIcon: {
    paddingRight: 16,
    fontSize: 20,
  },
 
  loginButton: {
    backgroundColor: color.green,
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#FFF",
    fontWeight: "600",
  },
});
