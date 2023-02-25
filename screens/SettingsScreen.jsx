import { useColorScheme, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Comfortaa_700Bold } from "@expo-google-fonts/comfortaa";

const SettingsScreen = () => {
  const colorScheme = useColorScheme();

  let [fontsLoaded] = useFonts({
    Comfortaa_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: colorScheme === "dark" ? "#171717" : "#fff",
        height: "100%",
        paddingHorizontal: 10,
      }}
    >
      <Text
        style={{
          fontFamily: "Comfortaa_700Bold",
          color: colorScheme === "dark" ? "#fff" : "#000",
          fontSize: 28,
        }}
      >
        Settings
      </Text>
    </SafeAreaView>
  );
};

export default SettingsScreen;
