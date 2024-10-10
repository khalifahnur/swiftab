import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isOnboardingComplete, setOnboardingComplete] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    // Check AsyncStorage for onboarding and authentication status
    const checkOnboardingAndAuthStatus = async () => {
      const onboardingStatus = await AsyncStorage.getItem("hasSeenOnboard");
     // const authToken = await AsyncStorage.getItem("AuthToken");

      setOnboardingComplete(!!onboardingStatus);
      //setAuthenticated(!!authToken);
      setIsLoading(false);
    };

    checkOnboardingAndAuthStatus();
  }, []);

  useEffect(() => {
    if (loaded && !isLoading) {
      SplashScreen.hideAsync();
    }
  }, [loaded, isLoading]);

  if (isLoading || !loaded) {
    return null; // Keep splash screen while loading fonts and checking storage
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        {/* Onboarding screen for new users */}
        {!isOnboardingComplete && (
          <Stack.Screen
            name="screens/onboarding"
            options={{ headerShown: false }}
          />
        )}

        {/* Auth screens if not authenticated */}
        {isOnboardingComplete && !isAuthenticated && (
          <>
            <Stack.Screen
              name="auth/signin"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="auth/signup"
              options={{ headerShown: false }}
            />
          </>
        )}

        {/* Main app screens after authentication */}
        {isAuthenticated && (
          <>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="screens/restaurantdetails" />
            <Stack.Screen name="screens/search" />
            <Stack.Screen name="+not-found" />
          </>
        )}
      </Stack>
    </GestureHandlerRootView>
  );
}
